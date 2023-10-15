import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef) {
  }

  displayMain = true;

  onPanelClicked(position: number) {
    console.log('onPanelClicked: ' + position);
    this.contentSvc.LoadContentComponent(this.containerRef, position);
    this.displayMain = false;
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

  ReturnToMain(event: boolean) {
    console.log('returnToMain received in main component')
    this.displayMain = event;
    this.containerRef.clear();
  }

}
