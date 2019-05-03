import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sl-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  slug = '/characters';
  addNewRoute = '/add-character';

  constructor() { 
  }

  ngOnInit() {
  }

}
