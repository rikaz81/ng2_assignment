import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  userForm: FormGroup;
  password: string;
  constructor(private formBuilder: FormBuilder) {
    //default value, custome validators, async validators
    this.userForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['rikaz', [Validators.required, , this.customNameChecker]],
        'email': ['rikaz@gmail.com', [Validators.required]]
      }),
      'password': ['', [Validators.required]],
      'retype': ['', [Validators.required, this.checkForPassword.bind(this)]],
      'hobbies': formBuilder.array([
        [//form array
          '', [Validators.required]
        ]
      ])
    });

  }

  ngOnInit() {
  }


  customNameChecker(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'rikaz') {
      //this is how you inform invalid
      return { 'name-invalid': true };
    }

    //if returns null means valid
    return null;
  }

  checkForPassword(control: FormControl) {

    console.log(control.value, ' - ', this.password);
    if (control.value === this.password) {
      //if returns null means valid
      return null;
    }
    //this is how you inform invalid
    return { 'password-nomatch': true };

  }


  handleForSubmit() {
    console.log(this.userForm);
  }

  addNewHobby() {
    (<FormArray>this.userForm.controls['hobbies']).push(new FormControl('', [Validators.required]));
    // (<FormArray>this.userForm.controls['hobbies']).push(new FormControl('', [Validators.required],[]));
  }
}
