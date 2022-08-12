import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from '../security/service/security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class RegisterComponent implements OnInit {
  hide = true;
  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
  }
  registerUser(form:NgForm){
    this.securityService.registerUser({
      userId : '',
      userName : form.value.userNme,
      email : form.value.email,
      password : form.value.password,
      person : {
        name:form.value.name,
        firstLastName:form.value.firstLastName,
        secondLastName:form.value.secondLastName,
        nationality:form.value.nationality,
        date:form.value.date
      },
      date : form.value.Date,
      state : form.value.state
    })

  }



}
