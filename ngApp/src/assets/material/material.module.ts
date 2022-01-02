import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDividerModule
  ]
})
export class MaterialModule { }