import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-btns',
  templateUrl: './add-btns.component.html',
  styleUrls: ['./add-btns.component.scss']
})
export class AddBtnsComponent implements OnInit {

  @Input() quiz: any = new EventEmitter();
  @Input() details: any = new EventEmitter();

  @Output() add = new EventEmitter();
  @Output() less = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor() { }
  ngOnInit(): void { }

  addDisabled() {
    return this.details.value?.length > 20 ? true : false;
  }
  lessDisabled() {
    return this.details.value?.length < 2 ? true : false;
  }
  submitDisabled() {
    return !this.quiz.valid || !this.details.valid;
  }
}
