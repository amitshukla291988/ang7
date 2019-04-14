import { Component,Input,Output, OnInit ,EventEmitter } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-test',
  template: `
  <input type="text" [(ngModel)]="name" value="Cult" />

  <div *ngIf="displayIf; then thenBlock ; else elseBlock"></div>
  <ng-template #thenBlock>
  <h1>then block </h1>
  </ng-template>
  <ng-template #elseBlock>
  <h1>Else block </h1>
  </ng-template>

  <div [ngSwitch]="color">
    <div *ngSwitchCase ="'red'" > This is red color </div>
    <div *ngSwitchCase ="'green'" > This is green color </div>
    <div *ngSwitchCase ="'yellow'" > This is yellow color </div>
    <div *ngSwitchDefault  > Pick again </div>
  </div>
  {{errMsg}}
  <div *ngFor="let color of emplist">
    <h2>{{o}}      {{color.name}}</h2>
  </div>
{{name}}

<button (click)="sendchildData()" >SendData</button>


  `,
  styles: []
})
export class TestComponent implements OnInit {

  public siteName = "CultAthletics" ;

  public displayIf = false ;
  public color = "redTR" ;
  public colors = ["red","green","yellow","purpal"] ;

  @Input('parentData') public name ;
  @Output() public childData = new EventEmitter();

  //Service
  public emplist = [] ;
  public errMsg ;
  constructor(private _emservice:EmployeeService) {  }


  ngOnInit() {
     this._emservice.getEmployeeList().subscribe(data=>this.emplist=data,
       err => this.errMsg = err) ;
  }
  sendchildData(){
  alert('hello');
   this.childData.emit('Hey Amit') ;
  }
}
