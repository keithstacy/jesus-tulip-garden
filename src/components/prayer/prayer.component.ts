import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent implements OnInit {
  
    constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}
  
    ngOnInit(): void {
      console.log('Content loaded');
    }
  
    returnToMain(){
      console.log('returnToMain called')
      this.contentSvc.LoadMainComponent(this.containerRef);
    }
}
