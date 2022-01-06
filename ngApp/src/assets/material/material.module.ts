import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  exports: [
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }