import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-what-we-believe',
  templateUrl: './what-we-believe.component.html',
  styleUrls: ['./what-we-believe.component.css']
})
export class WhatWeBelieveComponent  implements OnInit {
  
  constructor(private contentSvc: ContentService, 
    private containerRef: ViewContainerRef, 
    private router: Router, 
    private viewportScroller: ViewportScroller) { 
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.viewportScroller.scrollToPosition([0,0]);
        });
    }

  ngOnInit(): void {

  }

}
