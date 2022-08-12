import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from 'src/app/security/service/security.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit, OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  statusUser: boolean = false
  userSuscription: Subscription = {} as any
  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.userSuscription = this.securityService.securityChange.subscribe(status => {
      this.statusUser = status
    })
  }

  onMenuClose() {
    this.menuToggle.emit();
  }

  LogOut(){
    this.onMenuClose()
    this.securityService.Logout()

  }

  ngOnDestroy(): void {
    this.userSuscription.unsubscribe()
  }

}
