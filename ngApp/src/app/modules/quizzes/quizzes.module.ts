import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { QuizzesRoutingModule } from './quizzes-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { FilterPipe } from '../../core/pipes/filter.pipe';
import { DetailsScoreComponent } from './components/details-score/details-score.component';
import { DetailsStartComponent } from './components/details-start/details-start.component';

@NgModule({
  declarations: [
    QuizzesComponent,
    DetailsComponent,
    DetailsScoreComponent,
    FilterPipe,
    DetailsStartComponent
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
