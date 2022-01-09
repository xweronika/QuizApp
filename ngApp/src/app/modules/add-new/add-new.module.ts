import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewComponent } from './components/add-new/add-new.component';
import { AddNewRoutingModule } from './add-new-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';

@NgModule({
  declarations: [
    AddNewComponent,
    AddQuestionsComponent
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule,
    SharedModule
  ]
})
export class AddNewModule { }
