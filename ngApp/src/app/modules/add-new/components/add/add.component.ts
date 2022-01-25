import { Component, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../../../../core/services/quiz.service'
import { AddFormsComponent } from '../add-forms/add-forms.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  @ViewChild(AddFormsComponent) forms: AddFormsComponent = {} as AddFormsComponent;
  public quiz: any = {};
  public details: any = {};

  constructor(
    private quizService: QuizService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  updateQuiz(quiz: FormGroup) {
    this.quiz = quiz;
  }
  updateDetails(details: FormArray) {
    this.details = details;
  }

  submit(): void {
    if (Object.keys(this.quiz).length) this.openDialog();
    else this.snackBar.open('Please complete all fields.', 'OK',
      { duration: 10000, panelClass: ['snackbar'] })
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
        error: err => {
          this.snackBar.open(err.error.msg || err.statusText, 'OK',
            { duration: 10000, panelClass: ['snackbar'] })
        }
      });
  }
}