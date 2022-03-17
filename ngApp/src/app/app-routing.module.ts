import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'quizzes',
    loadChildren: () => import('./modules/quizzes/quizzes.module').then(m => m.QuizesModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./modules/add-new/add-new.module').then(m => m.AddNewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

