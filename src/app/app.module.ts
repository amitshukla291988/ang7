import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeService} from './employee.service' ;
import { HttpClientModule} from '@angular/common/http' ;

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test/test1/test1.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './include/login/login.component';
import { ChartComponent } from './chart/chart.component';

 import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    Test1Component,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ChartComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ChartsModule

  ],
entryComponents: [LoginComponent],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
