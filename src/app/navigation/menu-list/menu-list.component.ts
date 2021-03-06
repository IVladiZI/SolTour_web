import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuClose(){
    this.menuToggle.emit();
  }

}
