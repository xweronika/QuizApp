import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewComponent } from './components/add-new/add-new.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewRoutingModule { }
