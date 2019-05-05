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
  orders = [{
      id:1,
      Title:"Ball",
      price:2000
    },{
      id:2,
      Title:"Umpire",
      price:2000
    },
    {
      id:3,
      Title:"Water",
      price:1500
    }] ;
 selectedOrder = [];
 fruits = ['mango','adsf','asdfas'];
  selectedValue = [] ;
  selectedError = true ;
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
       alternetEmails: this.fb.array([]),
       favFruits:this.addFavFruitsControl(),
       orders:this.addOrderControl()

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

  addFavFruitsControl(){
    const arr = this.fruits.map(element=>{
      return this.fb.control(false);
    });
    console.log(arr);

    return this.fb.array(arr);

  }

  addOrderControl(){
    const arr = this.orders.map(element=>{
      return this.fb.control(false);
    });

    return this.fb.array(arr);
  }

  get ordersArray(){
      return <FormArray>this.registration.get('orders');
  }

  getSelectedOrder(){
    this.selectedOrder = [];
    this.ordersArray.controls.forEach((control,i)=>{
      if(control.value){
        this.selectedOrder.push(this.orders[i].id);
      }
    });
    console.log(this.selectedOrder) ;
  }

  getSelectedValue(){
    this.selectedValue = [];
     this.fruitsArray.controls.forEach((control,i) => {
        if(control.value){
          this.selectedValue.push(this.fruits[i]);
        }
     })

     console.log(this.selectedValue);
     this.selectedError = this.selectedValue.length > 0 ? false : true ;
  }

  fruitsTouch(){
     let flag = false ;
     this.fruitsArray.controls.forEach(control =>{
       if(control.touched){
         flag= true ;
       }
     });
     return flag ;
  }
  get fruitsArray(){
      return <FormArray>this.registration.get('favFruits');
  }
  // private addCheckboxes(){

  //   this.orders.map((o,i)=>{

  //    const control = new FormControl(i=== 0);
  //    (<FormArray>this.registration.controls['orders']).push(control);
  //   });
  // }

  addkAlternetEmail(){
       (<FormArray>this.registration.controls['groundFeature']).push(this.fb.control(''));
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
