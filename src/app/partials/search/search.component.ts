import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { DataModel } from '../../models/data-model';

@Component({
  selector: 'sl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() slug: string;
  query = '';
  timer;
  results: DataModel[];
  @Output() found = new EventEmitter<{ response: DataModel[]; pages: number }>();

  constructor(private api: ApiService) {}

  find() {
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.api.find(this.query, 1, this.slug).subscribe((res: any) => {
        this.found.emit({
          response: res.body,
          pages: res.headers.get('X-Total-Count')
        });
      });
    }, 200);
  }

  ngOnInit() {}
}
