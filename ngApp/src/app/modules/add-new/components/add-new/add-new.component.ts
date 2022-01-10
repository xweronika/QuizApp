import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  quiz = new FormGroup({
    category: new FormControl(''),
    description: new FormControl('')
  });

  form: FormGroup;
  constructor(private fb: FormBuilder) {    
    this.form = this.fb.group({
    credentials: this.fb.array([]),
  }); }

  ngOnInit(): void {
  }
  onSubmita(){
    console.log(this.quiz)
    console.log(this.form.controls['credentials'] as FormArray)
  }



  addCreds() {

    const creds = this.form.controls['credentials'] as FormArray;
    creds.push(this.fb.group({
      username: '',
      password: this.fb.array(['a', 'b', 'c']),
    }));
  }
}
