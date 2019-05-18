import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
    @Input() public parentData ;
    @Output() public childData=new EventEmitter() ;

  constructor() { }

  ngOnInit() {
  }
  childData_(){
alert('dafa');
      this.childData.emit("hi , amit shukla");

  }
}
