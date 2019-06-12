import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { TeamIndia } from "../models/india";
import { FriendlyError } from "../models/friendly-error";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getIndia(): Observable<TeamIndia | FriendlyError> {
    return this.http
      .get<TeamIndia>("http://18.222.27.227:8001/v1.0/cricket/india")
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse): Observable<FriendlyError> {
    let friendlyError = new FriendlyError();
    friendlyError.errorStatus = err.status;
    friendlyError.message = err.statusText;
    friendlyError.friendlyMessage =
      "An Error occurred while fetching Team India.";
    console.log(friendlyError);
    return throwError(friendlyError);
  }
}
