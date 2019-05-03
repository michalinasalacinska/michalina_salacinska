import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementComponent } from './add-element.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddElementComponent', () => {
  let component: AddElementComponent;
  let fixture: ComponentFixture<AddElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElementComponent ],
      imports: [
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
    fixture = TestBed.createComponent(AddElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
