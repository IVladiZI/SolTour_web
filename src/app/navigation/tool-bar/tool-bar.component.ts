import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggleDispatch(){
    this.menuToggle.emit();
  }

}
