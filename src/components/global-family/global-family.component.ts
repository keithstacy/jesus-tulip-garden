import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-global-family',
  templateUrl: './global-family.component.html',
  styleUrls: ['./global-family.component.css']
})
export class GlobalFamilyComponent  implements OnInit {

  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit() {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}
