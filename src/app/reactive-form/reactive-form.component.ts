import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators,FormArray} from '@angular/forms' ;
// import {FormGroup,FormControl} from '@angular/forms' ;
import {forbiddenNameValidator} from '../shared/user-name.validator';
import {PasswordValidator} from '../shared/password.validator' ;

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  get userName(){
      return this.registration.get('userName');
  }

  get email(){
      return this.registration.get('email');
  }
  get alternetEmails(){
      return this.registration.get('alternetEmails');
  }

  addAlternetEmail(){
       (<FormArray>this.registration.controls['alternetEmails']).push(this.fb.control(''));
  }

  registration : FormGroup ;
  // registration = new FormGroup({
  //     userName : new FormControl('AMit'),
  //     userPwd : new FormControl(''),
  //     userCPwd : new FormControl(''),
  //     address : new FormGroup({
  //         city : new FormControl('Noida'),
  //         state : new FormControl('U.P.'),
  //         country : new FormControl('India')
  //     })
  // });



  ngOnInit() {
       this.registration = this.fb.group({
      userName : ['Amit',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/amit/)]],
      email : [''],
      subscriber:[false],
      userPwd : [''],
       userCPwd : [''],
       address : this.fb.group({
           city : ['Noida'],
           state : ['U.P.'],
           country : ['India']
       }),
       alternetEmails: this.fb.array([])
  },{
      validator : PasswordValidator
  })
       this.registration.get('subscriber').valueChanges.subscribe(checkedValue=>{
           const email = this.registration.get('email');
           if(checkedValue){
               email.setValidators(Validators.required);
           }else{
               email.clearValidators();
           }
           email.updateValueAndValidity();
       })

  }
 loadData(){
     this.registration.patchValue({
         userName : 'Vijay Shukla',
         userPwd : 'kumar',
         userCPwd : 'kumar'

     })
 }

 onSubmit(){
     console.log(this.registration.value);
 }
}
