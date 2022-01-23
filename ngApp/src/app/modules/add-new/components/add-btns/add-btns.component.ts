import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-btns',
  templateUrl: './add-btns.component.html',
  styleUrls: ['./add-btns.component.scss']
})
export class AddBtnsComponent {

  @Input() public quiz: any = new EventEmitter<FormGroup>();
  @Input() public details: any = new EventEmitter<FormGroup>();

  @Output() public add = new EventEmitter();
  @Output() public less = new EventEmitter();
  @Output() public submit = new EventEmitter();

  addDisabled(): boolean {
    return this.details.value?.length > 20 ? true : false;
  }
  lessDisabled(): boolean {
    return this.details.value?.length < 2 ? true : false;
  }
  submitDisabled(): boolean {
    return !this.quiz.valid || !this.details.valid ? true : false;
  }
}
