import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable  } from 'rxjs';
import {catchError} from 'rxjs/operators'
/*import 'rxjs/add/observable/catch';*/
/*import 'rxjs/add/observable/of';*/
/*import 'rxjs/add/observable/throw' ;*/



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private _url:string = "assets/data/emp.json" ;
  constructor(private http: HttpClient) { }
  getEmployeeList():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url)
      ;


  }
}
