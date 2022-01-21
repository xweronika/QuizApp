import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewQuiz } from 'src/app/core/interfaces/quiz';
import { Details, QuizService } from '../../../../core/services/quiz.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public quiz: any = [];
  public details: any = []

  constructor() { }
  ngOnInit(): void { }

  add() {
    this.details.push({
      answers: ['', '', '', ''],
      question: '',
      correct: ''
    })
  }

  less() {
    this.details.pop();
  }

  updateQuiz(quiz: FormGroup) {
    this.quiz = quiz;
  }

  submit() {

    // this.quizService.addQuiz(this.quiz)
    //   .subscribe({
    //     next: res => { this.router.navigate([`/quizzes/${res}`]); },
    //     error: err => { console.log(err.error) }
    //   });
  }
  // radioChange(i: number, j: number) { }


}