import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ListViewComponent } from './partials/list-view/list-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCharcterComponent } from './pages/add-charcter/add-charcter.component';
import { PaginationComponent } from './partials/pagination/pagination.component';
import { SearchComponent } from './partials/search/search.component';
import { MainComponent } from './pages/main/main.component';
import { AddElementComponent } from './partials/add-element/add-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    AddCharcterComponent,
    PaginationComponent,
    SearchComponent,
    MainComponent,
    AddElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
