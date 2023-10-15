import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-how-we-teach',
  templateUrl: './how-we-teach.component.html',
  styleUrls: ['./how-we-teach.component.css']
})
export class HowWeTeachComponent implements OnInit {
  
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}
