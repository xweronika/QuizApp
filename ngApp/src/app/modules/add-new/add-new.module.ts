import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRoutingModule } from './add-new-routing.module';
import { AddComponent } from './components/add/add.component';
import { AddBtnsComponent } from './components/add-btns/add-btns.component';
import { AddDescComponent } from './components/add-desc/add-desc.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddFormsComponent } from './components/add-forms/add-forms.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';

@NgModule({
  declarations: [
    AddBtnsComponent,
    AddDescComponent,
    AddComponent,
    AddFormsComponent,
    AddDialogComponent
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule,
    TranslateModule,
    SharedModule
  ],
})
export class AddNewModule { }
