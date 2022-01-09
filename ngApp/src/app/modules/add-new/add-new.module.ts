import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './components/add-new/add-new.component';
import { AddNewRoutingModule } from './add-new-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddNewComponent
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule,
    SharedModule
  ]
})
export class AddNewModule { }
