import { Component, OnInit } from '@angular/core';
import { QuizService, Quiz } from '../../../../core/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  public quizzes: Array<Quiz> = [];

  constructor(public quizService: QuizService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.quizService.get()
      .subscribe({
        next: res => { this.quizzes = res },
        error: err => {
          this.snackBar.open(err.statusText, 'OK',
            { duration: 10000, panelClass: ['snackbar'] })
        }
      });
  }
}
