import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-emp',
  template: `

  <div (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments" >
     <span >{{department.id}}{{department.title}}</span>
  </div>

  `,
  styles: [`
      .selected{
        color:green;
      }
  `]
})
export class EmpComponent implements OnInit {
  public selectedId ;
  public departments = [
      {"id":1,"title":"Node"},
      {"id":2,"title":"Angular"},
      {"id":3,"title":"PHP"},
      {"id":4,"title":"Dot Net"}
  ];

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId =id ;
    })
  }

  onSelect(department){
     this.router.navigate(['/emp-list',department.id]);
      //this.router.navigate([department.id],{relativeTo:this.route});
  }

  isSelected(department){
    return department.id === this.selectedId ;
  }
}
