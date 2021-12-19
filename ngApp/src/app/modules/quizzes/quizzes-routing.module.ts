import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesComponent } from './components/quizzes/quizzes.component'
import { AddNewComponent } from './components/add-new/add-new.component';


const routes: Routes = [
  {
    path: '',
    component: QuizzesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
