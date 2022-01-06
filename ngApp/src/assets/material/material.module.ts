import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatSelectModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }