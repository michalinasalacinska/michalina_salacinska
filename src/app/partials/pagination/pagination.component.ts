import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'sl-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() pages: number[] = [];
  @Output() outPage = new EventEmitter<number>()

  constructor(private api: ApiService, private router: Router) { }

  goTo(p: string, num = 0) {
    this.page = parseInt(p) + num;
    this.outPage.emit(this.page)
    this.router.navigate([''], { queryParams: { page: this.page } });
  }

  ngOnInit() {}

}
