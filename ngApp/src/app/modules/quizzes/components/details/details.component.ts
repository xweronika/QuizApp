import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { QuizService, QuizDetails, Answer } from '../../../../core/services/quiz.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public data!: QuizDetails;
  private finalArray: Array<Answer> = [];
  public disabled_btn: Boolean = true;

  constructor(private quizService: QuizService, private router: Router) { }
  ngOnInit(): void {
    this.quizService.getById(1)
      .subscribe({
        next: res => { this.data = res; console.log(res) },
        error: err => { console.log(err.error) }
      });
  }

  submit() {
    let points = 0;
    this.finalArray.forEach(el => {
      if (el.selected == el.correct) points++;
    });
    this.quizService.saveScore(points, this.finalArray.length);
    this.router.navigate(['quizzes/score']);
  }

  radioChange(event: MatRadioChange, data: any) {
    let obj = this.data.details.filter(x => x.id == data.id)[0];
    obj.selected = event.value;
    if (!this.finalArray.some(x => x.id == data.id)) this.finalArray.push(obj);
    if (this.finalArray.length == this.data.details.length) this.disabled_btn = false;
  }
}
