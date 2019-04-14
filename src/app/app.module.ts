import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService} from './employee.service' ;
import { HttpClientModule} from '@angular/common/http' ;


import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpContactComponent } from './emp-contact/emp-contact.component';
/*import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';*/
/*import { TestComponent } from './test/test.component';
import { EmpComponent } from './emp/emp.component';*/

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmpContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
