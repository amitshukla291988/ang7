import { Component, OnInit ,ViewChild, ElementRef,TemplateRef,Input} from '@angular/core';
import {NgbDatepicker,NgbDatepickerConfig,NgbDateStruct, NgbCalendar,NgbDate} from '@ng-bootstrap/ng-bootstrap';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import {LoginComponent} from '../include/login/login.component';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
  providers: [NgbDatepickerConfig]
})
export class CalenderComponent implements OnInit {
  @Input() public parentData ;
  @ViewChild('template') modal:ElementRef;
  @ViewChild('dp') dp;
year_=2020 ;
month_=2 ;
day_=26;
   bsModalRef: BsModalRef;




    markDisabled ;
  disableDates: NgbDateStruct[]=[
      {year:2019,month:4,day:10},
      {year:2019,month:4,day:14},
      {year:2019,month:4,day:18},
  ];
  model: NgbDateStruct;
  //dps : NgbDatepicker ;
  date: {year: number, month: number};
  //modalRef: BsModalRef;
//
  constructor(private calendar: NgbCalendar,
    config: NgbDatepickerConfig,
    private empService:EmployeeService,
private modalService: BsModalService

    ) {
      config.minDate = {year: 2019, month: 5, day: 1};
    config.maxDate = {year: 2020, month: 5, day: 10};
  // days that don't belong to current month are not visible

    config.outsideDays = 'hidden';

    //call your service
    setTimeout(()=>{
        //this.markDisabled = [6,15];
      this.markDisabled =(date: NgbDateStruct,current:{year: number, month: number})=>{
          return this.disableDates.find(x=> NgbDate.from(x).equals(date))?true:false ;
      }
      //(date:NgbDate , current:{month:number})=>date.day ===13 ;
      //(date: NgbDate) => calendar.getWeekday(date) >=5 ;
    },2000)


   }

  ngOnInit() {
     this.dp.navigateTo({
      year:this.year_,
      month:this.month_});
     this.selectToday();
  }

  openFunction(){
    this.empService.openModalWithComponent();
  }
// openModalWithComponent() {
//     const initialState = {
//       list: [
//         'Open a modal with component',
//         'Pass your data',
//         'Do something else',
//         '...'
//       ],
//       title: 'Modal with component'
//     };
//     this.bsModalRef = this.modalService.show(LoginComponent, {initialState});
//     this.bsModalRef.content.closeBtnName = 'Close';
//   }

onDateSelection(date:NgbDate){
           console.log(date);
      alert(date.day);
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  selectToday() {
    this.model =({
      year:2019,
      month:9,
      day:this.day_
    }) //this.calendar.getToday();
  }
}
