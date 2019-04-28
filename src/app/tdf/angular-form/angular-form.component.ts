import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { User } from '../user' ;
@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
    userModel = new User('AMit Shukla','amit@gmail.com') ;
  constructor() { }

  ngOnInit() {
  }

}
