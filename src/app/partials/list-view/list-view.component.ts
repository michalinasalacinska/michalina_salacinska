import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataModel } from '../../models/data-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sl-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() slug: string; //for json-server route
  @Input() addRoute: string; //for route to adding new element to list
  elements: DataModel[] = [];
  page = 1;
  pages = [];
  message = '';
  prevPage = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['page']) {
        this.page = params['page'];
      }
    });
  }

  edit(id) {
    console.log('there will be edit feature in the future');
  }

  remove(id) {
    this.api.removeElement(id, this.slug).subscribe((res: any) => {
      this.elements = this.elements.filter(e => e.id !== id);
      if(this.elements.length%10 === 1) this.prevPage = true;

      if(this.prevPage && this.page !== 1) {
        this.api.getElements(this.page - 1, this.slug).subscribe((res: any) => {
          if(res.headers.get('X-Total-Count')%10 === 0) {
            this.paginator(res.headers.get('X-Total-Count'));
            this.elements = res.body;
            if(this.page > 1) {
              this.router.navigate([''], { queryParams: { page: this.page - 1} });
            }
          }
        });
      }
    });
  }

  paginator(count) {
    if(count%10 === 1) this.prevPage = true;
    let p = Math.ceil(parseInt(count, 10) / 10);
    let temp = [];
    for (let i = 1; i <= p; i++) {
      temp.push(i);
    }
    this.pages = temp.map(x => x);
  }

  getFind(e) {
    if (!e.response) {
      this.message = 'No Results Found';
      throw 'error';
    }
    if (e.response.length < 1) this.message = 'No Results Found';
    else this.message = '';
    this.elements = e.response;
    this.paginator(e.pages);
  }

  getPage(e) {
    this.api.getElements(e, this.slug).subscribe((res: any) => {
      this.elements = res.body;
    });
  }

  ngOnInit() {
    this.api.getElements(this.page, this.slug).subscribe((res: any) => {
      this.elements = res.body;
      this.paginator(res.headers.get('X-Total-Count'));
    });
  }
}
