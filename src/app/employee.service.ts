import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable  } from 'rxjs';
import {catchError} from 'rxjs/operators'
/*import 'rxjs/add/observable/catch';*/
/*import 'rxjs/add/observable/of';*/
/*import 'rxjs/add/observable/throw' ;*/

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {LoginComponent} from './include/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   bsModalRef: BsModalRef;

    private _url:string = "assets/data/emp.json" ;
  constructor(private http: HttpClient,private modalService: BsModalService) { }
  getEmployeeList():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this._url)
      ;


  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(LoginComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
