import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { SecurityService } from '../../security/service/security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit,OnDestroy {
  @Output() menuToggle = new EventEmitter<void>();
  stateUser: Boolean = false
  userSuscription : Subscription = {} as any
  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.userSuscription = this.securityService.securityChange.subscribe(status => {
      this.stateUser = status
    });

  }

  onMenuToggleDispatch() {
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.userSuscription.unsubscribe();
  }
}
