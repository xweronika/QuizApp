import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-add-desc',
  templateUrl: './add-desc.component.html',
  styleUrls: ['./add-desc.component.scss']
})
export class AddDescComponent implements OnInit {
  public quiz: FormGroup;
  @Output() update = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.quiz = fb.group({
      category: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
    });
  }
  ngOnInit(): void { }

  getError(name: string): string {
    const control = this.quiz.controls[name];
    const max = control.errors!['maxlength']?.requiredLength | 0;
    const min = control.errors!['minlength']?.requiredLength | 0;
    if (control.hasError('required'))
      return `${name} is required.`;
    else if (control.hasError('minlength'))
      return `${name} can not be shorter than ${min} characters.`;
    else if (control.hasError('maxlength'))
      return `${name} can not be shorter than ${max} characters.`;
    else return ""
  }

  isTouched(name: string): boolean {
    const valid = this.quiz.controls[name].valid;
    const dirty = this.quiz.controls[name].dirty;
    return !valid && dirty ? true : false;
  }
}
