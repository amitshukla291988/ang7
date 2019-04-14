import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-emp-detail',
  template: `
    <p>
      employee id is {{empId}}
      <a (click)="goPrevious()">Back</a><br>
      <a (click)="goNext()">Next</a>

    </p>
    <button (click)="empContact()">Contact</button>
    <router-outlet></router-outlet>
    <div (click)="goBack()">Back</div>
  `,
  styles: []
})
export class EmpDetailComponent implements OnInit {

  public empId ;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    /*let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.empId = id ;*/
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.empId =id ;
    })

  }

  goPrevious(){
    let previousId = parseInt(this.empId) - 1 ;
    //this.router.navigate(['/emp',previousId])
    this.router.navigate(['../',previousId],{relativeTo:this.route});

  }

  goNext(){
    let nextId = parseInt(this.empId) + 1 ;
    //this.router.navigate(['/emp',nextId])
    this.router.navigate(['../',nextId],{relativeTo:this.route});
  }

  goBack(){
    let selectedId = this.empId? parseInt(this.empId):null ;
    //this.router.navigate(['/emp',{id:selectedId,test:"hello"}]);
      this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});

  }
  empContact(){

      this.router.navigate(['contact'],{relativeTo:this.route});

  }
}
