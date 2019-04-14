import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import  {TestComponent} from './test/test.component' ;
import {EmpDetailComponent} from './emp-detail/emp-detail.component' ;
import  {PageNotFoundComponent} from './page-not-found/page-not-found.component' ;
import {EmpContactComponent} from './emp-contact/emp-contact.component' ;


const routes: Routes = [
{path:'' , redirectTo:'/emp-list' , pathMatch:'full'},
{path:'emp-list', component:EmpComponent},
{
    path:'emp-list/:id',
    component:EmpDetailComponent,
    children:[
        {path:'contact',component:EmpContactComponent}
    ]

},
{path:'test' , component:TestComponent},
{path:"**" , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[EmpComponent,TestComponent,PageNotFoundComponent,EmpDetailComponent,EmpContactComponent]