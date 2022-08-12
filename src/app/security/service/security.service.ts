import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { LoginData } from "src/app/model/data/login-data.model";
import { Person, User } from "src/app/model/user.model";

@Injectable()
export class SecurityService {
  securityChange = new Subject<boolean>();

  constructor(private router: Router) { }

  private user: User = {} as any
  private person: Person = {} as any
  registerUser(user: User) {
    this.user = {
      email: user.email,
      password: user.password,
      userName: user.userName,
      userId: Math.round(Math.random() * 1000).toString(),
      person: user.person,
      date: user.date,
      state: user.state
    }
    this.securityChange.next(true)
    this.router.navigate(['/'])
  }
  login(loginData: LoginData) {
    this.user = {
      email: loginData.email,
      password: loginData.password,
      userName: '',
      userId: Math.round(Math.random() * 1000).toString(),
      person: {} as any,
      date: new Date(),
      state: true
    }
    this.securityChange.next(true)
    this.router.navigate(['/'])
  }
  Logout() {
    this.user = {} as any
    this.securityChange.next(false)
    this.router.navigate([''])
  }
  getUser() {
    return { ...this.user }
  }
  onSesion() {
    return this.user != null
  }

} 
