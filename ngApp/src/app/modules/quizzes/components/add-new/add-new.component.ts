import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      category: this.fb.control(''),
      description: this.fb.control(''),
      details: this.fb.array([])
    });
    this.addQuestion();
  }
  ngOnInit(): void { }

  onSubmit() {
    this.setCorrect();
    console.log(this.form.controls['details'] as FormArray)
    console.log(this.form)
  }

  addQuestion() {
    const details = this.form.controls['details'] as FormArray;
    if (details.length < 20) details.push(this.fb.group({
      question: '',
      correct: 0,
      answers: this.fb.array(['', '', '', '']),
    }));
  }

  removeQuestion() {
    const details = this.form.controls['details'] as FormArray;
    if (details.length > 1) details.removeAt(details.length - 1);
  }

  trackByFn(index: number) {
    return index;
  }

  numToStr(num1: number, num2: number) {
    return num1.toString() + num2.toString()
  }

  radioChange(detailIndex: number, radioIndex: number) {
    this.form.controls['details'].value[detailIndex].correct = radioIndex;
  }

  setCorrect() {
    this.form.controls['details'].value.forEach((el: { correct: string | number; answers: any; }) => {
      el.correct = el.answers[el.correct]
    });
  }
}
