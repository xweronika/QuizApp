import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  public score!: string;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quizService.getScore() ?
      this.score = this.quizService.getScore()
      : this.router.navigate(['quizzes']);;
  }
}
