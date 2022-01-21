import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-btns',
  templateUrl: './add-btns.component.html',
  styleUrls: ['./add-btns.component.scss']
})
export class AddBtnsComponent implements OnInit {

  @Input() quiz: any = new EventEmitter();
  @Input() details = new EventEmitter();

  @Output() add = new EventEmitter();
  @Output() less = new EventEmitter();
  @Output() submit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.add.emit();
    this.add.emit();
  }
  addDisabled() {
    return this.details.length > 20 ? true : false;
  }
  lessDisabled() {
    return this.details.length < 2 ? true : false;
  }
  submitDisabled() {
    return !this.quiz.valid;
  }
}
