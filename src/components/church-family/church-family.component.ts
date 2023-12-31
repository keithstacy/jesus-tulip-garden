import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-church-family',
  templateUrl: './church-family.component.html',
  styleUrls: ['./church-family.component.css']
})
export class ChurchFamilyComponent implements OnInit {

  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit() {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }
}
