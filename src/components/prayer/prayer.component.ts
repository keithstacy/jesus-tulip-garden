import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent implements OnInit {
  
    constructor(private containerRef: ViewContainerRef,
      private router: Router, 
      private viewportScroller: ViewportScroller) {
        this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.viewportScroller.scrollToPosition([0,0]);
          });
      }
  
    ngOnInit(): void {
      console.log('Content loaded');
    }
  
    returnToMain(){
      console.log('returnToMain called')
    }
}
