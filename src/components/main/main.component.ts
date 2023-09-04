import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  onMouseEnter(position: number){
    let theDiv = document.getElementById('div' + position) as HTMLDivElement;
    theDiv.style.backgroundColor = 'black';
    theDiv.style.display = 'none';
  }

  onMouseLeave(position: number){
    let theDiv = document.getElementById('div' + position) as HTMLDivElement;
    theDiv.style.display = '';
  }
}
