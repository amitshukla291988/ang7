import { Component,NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' ;
import {NgbDatepickerConfig,NgbDateStruct, NgbCalendar,NgbDate} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbDatepickerConfig]
})

/*

 constructor(config: NgbDatepickerConfig, calendar: NgbCalendar) {
    // customize default values of datepickers used by this component tree
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    //call your service
    setTimeout(()=>{
      this.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
    },2000)

  }
*/

export class AppComponent {
  title = 'NcrSports';
  public name ="Vijay SHukla";
  public message = "";
  markDisabled ;
  disableDates: NgbDateStruct[]=[
      {year:2019,month:4,day:10},
      {year:2019,month:4,day:14},
      {year:2019,month:4,day:18},
  ];
  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar,config: NgbDatepickerConfig) {
      config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

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
       onDateSelection(date:NgbDate){
           console.log(date);
      alert(date.day);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  //this.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
}
