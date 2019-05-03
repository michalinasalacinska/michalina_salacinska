import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { ListViewComponent } from 'src/app/partials/list-view/list-view.component';
import { SearchComponent } from 'src/app/partials/search/search.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from 'src/app/partials/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,
        ListViewComponent,
        SearchComponent, 
        PaginationComponent
      ],
      imports: [
        RouterModule,
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
