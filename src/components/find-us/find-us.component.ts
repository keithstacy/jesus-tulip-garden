import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

declare var Microsoft: any;

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css']
})
export class FindUsComponent implements OnInit {
  latitude: number = 44.7790009;
  longitude: number = -93.7739879;

  @ViewChild('theMap') theMap: ElementRef = new ElementRef(null);
  
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
    this.loadMapScenario();
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }

  loadMapScenario() {
  }
}
