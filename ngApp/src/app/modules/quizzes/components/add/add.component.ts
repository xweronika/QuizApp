import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Details } from '../../../../core/interfaces/details'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  public category = this.newForm(2, 50);
  public description = this.newForm(10, 100);
  public question = Array.from({ length: 20 }, () => this.newForm(10, 70));
  public answer = Array.from({ length: 20 }, () => this.newForm(1, 50));

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      category: this.category,
      description: this.description,
      details: this.fb.array([])
    });
    this.addQuestion();
    this.addQuestion();
  }
  ngOnInit(): void { }

  onSubmit() {
    this.form.controls['details'].value.forEach((el: Details) => {
      el.correct = el.answers[parseInt(el.correct)];
    });
    console.log(this.form.controls['details'] as FormArray)
    console.log(this.form)
  }

  addQuestion() {
    const details = this.form.controls['details'] as FormArray;
    const answers = this.answer.slice(details.length * 4, details.length * 4 + 4)
    if (details.length < 20) details.push(this.fb.group({
      question: this.question[details.length],
      correct: 0,
      answers: this.fb.array(answers),
    }));
  }

  removeQuestion() {
    const details = this.form.controls['details'] as FormArray;
    details.removeAt(details.length - 1);
  }

  trackByFn(index: number) {
    return index;
  }

  radioChange(detailIndex: number, radioIndex: number) {
    this.form.controls['details'].value[detailIndex].correct = radioIndex;
  }

  getError(value: FormControl | FormArray, name: string, min: number, max: number) {
    if (value.hasError('required')) return `${name} is required.`;
    else if (value.hasError('minlength')) return `${name} can not be shorter than ${min} characters.`;
    else if (value.hasError('maxlength')) return `${name} can not be longer than ${max} characters.`;
    return "";
  }

  newForm(min: number, max: number) {
    return new FormControl('', [
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max)
    ])
  }

}