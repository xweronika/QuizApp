import { Component, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewQuiz } from 'src/app/core/interfaces/quiz';
import { Details, QuizService } from '../../../../core/services/quiz.service'
import { AddFormsComponent } from '../add-forms/add-forms.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent{
  @ViewChild(AddFormsComponent) forms: AddFormsComponent = {} as AddFormsComponent;

  public quiz: any = [];
  public details: any = [];



  updateQuiz(quiz: FormGroup) {
    this.quiz = quiz;
  }
  updateDetails(details: FormArray) {
    this.details = details;
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