import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
    private viewportScroller: ViewportScroller, 
    private route: ActivatedRoute) { 
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          const fragment = this.route.snapshot.fragment;
          if (fragment) {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
            }
          }
        });
    }

  ngOnInit(): void {

  }

}
