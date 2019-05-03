import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCharcterComponent } from './pages/add-charcter/add-charcter.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'add-character',
    component: AddCharcterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
