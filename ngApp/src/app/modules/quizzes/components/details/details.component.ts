import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService, QuizDetails } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public data!: QuizDetails;
  public disabledBtn: Boolean = true;
  public finalArray: Array<string> = [];
  //public showScore: Boolean = this.quizService.showScore;
  public num = 1;

  constructor(public quizService: QuizService, private router: Router) { }
  ngOnInit(): void {
    this.quizService.getById(1)
      .subscribe({
        next: res => { this.data = res; console.log(res) },
        error: err => { console.log(err.error) }
      });
  }

  submit() {
    let points = 0;
    this.data.details.forEach(el => {
      if (this.finalArray[el.id-1] == el.correct) points++;
    });
    this.quizService.saveScore(points, this.data.details.length);
    //this.router.navigate(['quizzes/score']);
    this.quizService.showScore = true;
  }

  radioChange() {
    const array_length = this.finalArray.filter(Boolean).length;
    if (array_length == this.data.details.length) this.disabledBtn = false;
  }
}
