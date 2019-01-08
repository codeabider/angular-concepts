import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm = new FormGroup({
    userName: new FormControl('BroDude'), // could provide default vals
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  }); // form model
  // refresher: FormGroup, FormControl are classes with constructor initializations available

  constructor() { }

  ngOnInit() {
  }

  loadAPIData() {
    // this.registrationForm.setValue({
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'batman',
      confirmPassword: 'batman',
      // address: {
      //   street: 'Bat cave',
      //   city: 'Gotham',
      //   state: 'New York',
      //   postalCode: '123456'
      // }
    }); // note: setValue must be provided with all the formControl keys. for partial updation, use patchValue.
  }

}
