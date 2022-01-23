import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-details-score',
  templateUrl: './details-score.component.html',
  styleUrls: ['./details-score.component.scss']
})
export class DetailsScoreComponent implements OnInit {
  public score: string = "";
  public quiz_id: number = 0;

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.getScore() ?
      this.score = this.quizService.getScore()
      : this.toQuizzes();

    this.quizService.score ?
      this.quiz_id = this.quizService.score.quiz_id
      : this.toQuizzes();
  }

  toQuizzes(): void {
    this.router.navigate(['quizzes']);
  }
  toQuizId(): void {
    this.router.navigate([`/quizzes/${this.quiz_id}`]);
  }
}
