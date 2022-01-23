import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.scss']
})
export class AddFormsComponent {
  @Output() update = new EventEmitter();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      details: this.fb.array([])
    });
    this.add();
    this.add();
  }

  add() {
    const details = this.form.controls['details'] as FormArray;
    const answers = Array.from({ length: 4 }, () =>
      this.fb.control('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]));
    details.push(this.fb.group({
      question: this.fb.control('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
      correct: this.fb.control(0, Validators.required),
      answers: this.fb.array(answers),
    }));
    this.emit();
  }

  async less() {
    const details = this.form.controls['details'] as FormArray;
    details.removeAt(details.length - 1);
    this.emit();
  }

  trackByFn(index: number) {
    return index;
  }

  emit() {
    this.update.emit(this.form.controls['details']);
  }

  radioChange(detailIndex: number, radioIndex: number) {
    let details = (this.form.get('details') as FormArray);
    let correct = (details.controls[detailIndex] as FormArray).get('correct');
    correct!.setValue(radioIndex);
    this.emit();
  }
}
