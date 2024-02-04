import { Component, OnInit, ViewContainerRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit {
  @Output() goToChurchFamily = new EventEmitter();
  @Output() goToGlobalFamily = new EventEmitter();
  @Output() goToFindUs = new EventEmitter();


  constructor(public elementRef: ElementRef, private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
    this.contentSvc.IntroViewed = true;
  }

  returnToMain(){
    console.log('returnToMain called')
    this.contentSvc.LoadMainComponent(this.containerRef);
  }

  navigateToChurchFamily() {
    this.goToChurchFamily.emit();
  }

  navigateToGlobalFamily() {
    this.goToGlobalFamily.emit();
  }

  navigateToFindUs() {
    this.goToFindUs.emit();
  }
}