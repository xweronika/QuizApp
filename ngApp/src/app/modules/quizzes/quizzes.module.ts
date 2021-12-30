import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    QuizzesComponent,
    AddNewComponent,
    DetailsComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    TranslateModule,
    SharedModule
  ]
})
export class QuizesModule { }
