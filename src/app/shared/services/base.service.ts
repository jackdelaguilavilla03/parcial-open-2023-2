import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, map, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath = 'http://localhost:3000/api/v1'
  resourcesEndPoint: string = '/resources';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      })
  };

  constructor(private http: HttpClient) {
  }

  private resourcePath():string {
    return `${this.basePath}${this.resourcesEndPoint}`;
  }

  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(()=> new Error('Something bad happened; please try again later.'));
  }

  getAll() {
    return this.http.get<T[]>(this.resourcePath(), this.httpOptions)
        .pipe(retry(2), catchError(this.handleError));
  }

}
