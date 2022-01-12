import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { Details } from '../../../../core/interfaces/details'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  public category = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(50)
  ]);
  public description = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50)
  ]);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      category: this.category,
      description: this.description,
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
    details.removeAt(details.length - 1);
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
    this.form.controls['details'].value.forEach((el: Details) => {
      el.correct = el.answers[parseInt(el.correct)];
    });
  }
  getError(value: FormControl | FormArray, name: string, min?: number, max?: number) {
    if (value.hasError('required')) return `${name} is required.`;
    else if (value.hasError('minlength')) return `${name} can not be shorter than ${min || 5} characters.`;
    else if (value.hasError('maxlength')) return `${name} can not be longer than ${max || 25} characters.`;
    return "";
  }



}