import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesComponent } from './components/quizzes/quizzes.component'
import { AddNewComponent } from './components/add-new/add-new.component';
import { DetailsComponent } from './components/details/details.component';
import { ScoreComponent } from './components/score/score.component';

const routes: Routes = [
  {
    path: '',
    component: QuizzesComponent
  },
  {
    path: 'add-new',
    component: AddNewComponent
  },
  {
    path: 'score',
    component: ScoreComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
