import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Output() Clicked = new EventEmitter<any>();

  clicked() {
    this.Clicked.emit(0);
  }
}
