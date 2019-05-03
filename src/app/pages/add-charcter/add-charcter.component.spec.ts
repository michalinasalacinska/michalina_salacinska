import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCharcterComponent } from './add-charcter.component';
import { AddElementComponent } from 'src/app/partials/add-element/add-element.component';
import { ApiService } from 'src/app/api.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddCharcterComponent', () => {
  let component: AddCharcterComponent;
  let fixture: ComponentFixture<AddCharcterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      declarations: [ 
        AddCharcterComponent, 
        AddElementComponent 
      ],
      providers: [
        ApiService,
        HttpClient,
        HttpHandler,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCharcterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
