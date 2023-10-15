import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-our-leaders',
  templateUrl: './our-leaders.component.html',
  styleUrls: ['./our-leaders.component.css']
})
export class OurLeadersComponent implements OnInit {
  
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}