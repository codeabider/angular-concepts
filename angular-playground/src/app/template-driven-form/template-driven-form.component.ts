import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  topics = ['AngularJS', 'Angular', 'ReactJS', 'VueJS', 'React-Native'];
  isSubmitted = false;
  errorMsg = '';

  userModel = new User('', 'Pune', 'MH', 411033, '', '', null, '', '', true);

  constructor(private _enrollmentService: EnrollmentService) { }

  ngOnInit() {
  }

  getErrorMsg(errors: any) {
    if (errors) {
      return (errors.required) ? 'This can\'t be empty!' : (errors.pattern) ? 'Please enter valid value (10-digits)' : null;
    } else {
      return 'This can\'t be empty!';
    }
  }

  onFormSubmit() {
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
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
