import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ValidService } from 'src/app/core/services/valid.service';
@Component({
  selector: 'app-add-desc',
  templateUrl: './add-desc.component.html',
  styleUrls: ['./add-desc.component.scss']
})
export class AddDescComponent {
  public quiz: FormGroup;
  @Output() public update = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder, private validService: ValidService) {
    this.quiz = fb.group({
      category: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
    });
  }

  getError(name: string): string {
    const control = this.quiz.controls[name] as FormControl;
    return this.validService.getError(name, control);
  }
}
