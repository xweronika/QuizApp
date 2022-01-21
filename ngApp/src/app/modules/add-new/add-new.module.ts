import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRoutingModule } from './add-new-routing.module';
import { AddComponent } from './components/add/add.component';
import { AddBtnsComponent } from './components/add-btns/add-btns.component';
import { AddDescComponent } from './components/add-desc/add-desc.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AddBtnsComponent,
    AddDescComponent,
    AddComponent,
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule,
    SharedModule
  ]
})
export class AddNewModule { }
