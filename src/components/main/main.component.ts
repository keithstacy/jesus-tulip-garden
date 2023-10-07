import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  display = false;

  onPanelClicked(position: number) {
    this.display = !this.display;
  }

  onMouseEnter(position: number){
    let theDiv = document.getElementById('div' + position) as HTMLDivElement;
    let theImg = document.getElementById('img' + position) as HTMLImageElement;
    theDiv.style.backgroundColor = 'black';
    theImg.classList.add('darken');
  }

  onMouseLeave(position: number){
    let theDiv = document.getElementById('div' + position) as HTMLDivElement;
    let theImg = document.getElementById('img' + position) as HTMLImageElement;
    theDiv.style.display = '';
    theImg.classList.remove('darken');
  }

}
