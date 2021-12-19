import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';



@NgModule({
  declarations: [
    QuizzesComponent,
    AddNewComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ]
})
export class QuizesModule { }
