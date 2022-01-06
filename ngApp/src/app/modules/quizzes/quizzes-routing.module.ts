import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesComponent } from './components/quizzes/quizzes.component'
import { AddNewComponent } from './components/add-new/add-new.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsScoreComponent } from './components/details-score/details-score.component';

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
    component: DetailsScoreComponent
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
