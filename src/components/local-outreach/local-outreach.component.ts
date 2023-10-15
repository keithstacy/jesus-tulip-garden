import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-local-outreach',
  templateUrl: './local-outreach.component.html',
  styleUrls: ['./local-outreach.component.css']
})
export class LocalOutreachComponent implements OnInit {
  
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}
