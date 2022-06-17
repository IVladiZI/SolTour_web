import { Component } from "@angular/core";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent{
  visibilty = false;
  title = 'User component';
  userName = '';
  users = ['Margarita','Fer','Gun','Patamon']
  constructor(){
    setTimeout(() => {
      this.visibilty = true;
    },3000);
  }
  onAddUser(){
    this.users.push(this.userName);
  }
}
