import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../../../core/services/quiz.service'
import { QuizService } from '../../../../core/services/quiz.service';
@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})

export class QuizzesComponent implements OnInit {
  public quizzes: Array<Quiz> = [];
  handleUpdateResponse: any;
  handleError: any;
  constructor(public quizService: QuizService,) { }

  ngOnInit(): void {
    this.quizService.getQuizzes()
      .subscribe({
        next: res => { this.quizzes = res },
        error: err => { console.log(err.error) }
      });
  }
}
