import { Component, OnInit } from '@angular/core';
import { QuizService, QuizDetails } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public quiz!: QuizDetails;
  constructor(public quizService: QuizService) { }
  ngOnInit(): void {
    this.quizService.getById(1)
      .subscribe({
        next: res => { this.quiz = res; console.log(res) },
        error: err => { console.log(err.error) }
      });
  }
}
