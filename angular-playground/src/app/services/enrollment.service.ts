import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// such injector definition is new to Angular 6 (do not need to register with app.module) aka Tree-shakeable providers
// https://blog.ninja-squad.com/2018/05/04/what-is-new-angular-6/
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  enroll(userdata: User) {
    return this._http.post<any>(this._url, userdata)
              .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
