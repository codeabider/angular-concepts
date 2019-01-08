import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/username.validator';
import { passwordValidator } from '../shared/password.validator';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm: FormGroup;
  errorMsg: string;
  isSubmitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _registrationService: EnrollmentService) { }

  ngOnInit() {
    /* first element in the array is the default value for associated formControl. need to pass as array if
    more than 1 validations are required */
    this.registrationForm = this._formBuilder.group({
      userName: [
        'JohnDoe',
        [Validators.required, Validators.minLength(3), forbiddenNameValidator(/admin/)]
      ],
      password: ['', forbiddenNameValidator(/password/)],
      confirmPassword: [''],
      email: [''],
      subscribeCheck: [true],
      address: this._formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {validator: passwordValidator}); // form builder a simple alternative to build formGroups and formControls

    this.registrationForm.get('subscribeCheck').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();
      });
    // note: this is a little buggy right now -- check
  }

  // note: instead of writing registrationForm.get('userName') multiple timestamp, we could use a getter method to do the same!
  get userName() {
    return this.registrationForm.get('userName');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  getErrorMessage(errors: any) {
    if (errors) {
      // console.log(errors);
      return errors.required ? 'This field is required!' :
        errors.minlength ? 'Username should be atleast 3 characters long!' :
        errors.forbiddenName ? `This field cannot contain string: \'${errors.forbiddenName.value}\' !!` :
        errors.passwordMismatch === true ? 'Passwords do not match!!' :
        'Something is wrong!';
    } else {
      return 'This field is required!';
    }
  }

  loadAPIData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'batman',
      confirmPassword: 'batman'
    });
  }

  onSubmit() {
    this._registrationService.enroll(this.registrationForm.value)
      .subscribe(
        data => {
          console.log('Success!', data);
          this.isSubmitted = true;
        },
        error => {
          console.log('Error!', error);
          this.errorMsg = error.statusText;
        }
      );
  }

}
