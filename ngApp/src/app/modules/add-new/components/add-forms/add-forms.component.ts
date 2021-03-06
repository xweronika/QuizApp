import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ValidService } from 'src/app/core/services/valid.service';

@Component({
  selector: 'app-add-forms',
  templateUrl: './add-forms.component.html',
  styleUrls: ['./add-forms.component.scss']
})
export class AddFormsComponent {
  @Output() private update = new EventEmitter<FormArray>();
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validService: ValidService,
    public translate: TranslateService) {
    this.form = fb.group({
      details: this.fb.array([])
    });
    this.add();
    this.add();
  }

  getError(name: string, i: number): string {
    const form = (this.form.controls['details'] as FormArray).controls[i] as FormGroup;
    const control = form.controls[name] as FormControl;
    return this.validService.getError(name, control);
  }
  getAnswerError(i: number, j: number): string {
    const form = (this.form.controls['details'] as FormArray).controls[i] as FormGroup;
    const control = ((form.controls['answers'] as FormArray).controls[j] as FormControl);
    return this.validService.getError('answer', control);
  }

  add(): void {
    const details = this.form.controls['details'] as FormArray;
    const answers = Array.from({ length: 4 }, () =>
      this.fb.control('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]));
    details.push(this.fb.group({
      question: this.fb.control('', [Validators.required, Validators.minLength(10), Validators.maxLength(70)]),
      correct: this.fb.control(0),
      answers: this.fb.array(answers),
    }));
    this.emit();
  }

  less(): void {
    const details = this.form.controls['details'] as FormArray;
    details.removeAt(details.length - 1);
    this.emit();
  }

  radioChange(i: number, j: number): void {
    let details = (this.form.get('details') as FormArray);
    let correct = (details.controls[i] as FormArray).get('correct');
    correct!.setValue(j);
    this.emit();
  }

  trackByFn(index: number): number {
    return index;
  }

  emit(): void {
    this.update.emit(this.form.controls['details'] as FormArray);
  }

  getPlaceholder(index: number) {
    return `${this.translate.instant('add.answer')} ${(index + 1)}`
  }
}
