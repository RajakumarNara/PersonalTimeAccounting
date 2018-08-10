import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IThought} from './thought';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class TimeSpentForService {
  private _url:string="/assets/Thoughts/thought.json";
  constructor(private http:HttpClient) { }

  public getThoughtDetails():Observable<IThought[]> {
     return this.http.get<IThought[]>(this._url)
    .catch(this.errorHandler);
  }
  errorHandler(error:HttpErrorResponse)
  {
    return Observable.throw(error.message ||"Server Error");
  }
}
