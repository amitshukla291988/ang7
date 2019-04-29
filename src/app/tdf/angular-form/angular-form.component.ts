import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import { User } from '../user' ;
@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
    topics = ["PHP","IOS","NET"];
    userModel = new User('AMit Shukla','amit@gmail.com','7289057538','','Morning',true) ;
  constructor() { }

  ngOnInit() {
  }

}
