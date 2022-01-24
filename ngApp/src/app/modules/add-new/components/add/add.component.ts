import { Component, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../../../../core/services/quiz.service'
import { AddFormsComponent } from '../add-forms/add-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  @ViewChild(AddFormsComponent) forms: AddFormsComponent = {} as AddFormsComponent;
  public quiz: any = {};
  public details: any = {};

  constructor(private quizService: QuizService, private router: Router, public dialog: MatDialog) { }

  updateQuiz(quiz: FormGroup) {
    this.quiz = quiz;
  }
  updateDetails(details: FormArray) {
    this.details = details;
  }

  submit(): void {
    if (Object.keys(this.quiz).length) this.openDialog();
    else console.log('error');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: 'auto',
      data: { name: this.quiz.value['category'] },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.addNewQuiz();
    });
  }

  addNewQuiz() {
    let newQuiz = { ...this.quiz.value, details: this.details.value };
    this.quizService.addQuiz(newQuiz)
      .subscribe({
        next: res => { this.router.navigate([`/quizzes/${res}`]); },
        error: err => { console.log(err.error) }
      });
  }
}