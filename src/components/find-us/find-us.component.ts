import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.css']
})
export class FindUsComponent implements OnInit {
  
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}
