import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-foreign-missions',
  templateUrl: './foreign-missions.component.html',
  styleUrls: ['./foreign-missions.component.css']
})
export class ForeignMissionsComponent implements OnInit {

  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit() {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}
