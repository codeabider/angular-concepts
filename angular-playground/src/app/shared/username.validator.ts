import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
//   const forbidden = /admin/.test(control.value);

//   return forbidden ? { 'forbiddenName': {value: control.value} } : null;
// }

// note: the above function could only accept a form control as parameter. hence using following
// 'factory function' to pass regex as param and return as a validator function, to provide reusability

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { 'forbiddenName': {value: control.value} } : null;
  };
}
