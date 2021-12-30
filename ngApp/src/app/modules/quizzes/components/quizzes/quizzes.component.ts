import { Component, OnInit } from '@angular/core';
import { QuizService, Quiz } from '../../../../core/services/quiz.service';
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})

export class QuizzesComponent implements OnInit {
  public quizzes: Array<Quiz> = [];
  
  constructor(public quizService: QuizService,) { }

  ngOnInit(): void {
    this.quizService.get()
      .subscribe({
        next: res => { this.quizzes = res },
        error: err => { console.log(err.error) }
      });
  }
}
