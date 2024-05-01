import { Component, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

declare var Microsoft: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(44.723877,-93.929512),
    zoom: 12,
    backgroundColor: '#00ff00'
  }

  constructor(private contentSvc: ContentService, 
              private containerRef: ViewContainerRef, 
              private sanitizer: DomSanitizer, 
              private router: Router, 
              private viewportScroller: ViewportScroller) { 
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        this.viewportScroller.scrollToPosition([0,0]);
      });
  }

  ngAfterViewInit() {
    let outerMapContainer: HTMLElement | null = document.getElementById("outer-map-container");
    let googleMapTag: Element | undefined;
    let innerMapContainer: Element | undefined;
    console.log(outerMapContainer);
    if (outerMapContainer) {
        googleMapTag = outerMapContainer.children[0];
        
        if (googleMapTag) {
          console.log(googleMapTag as HTMLElement);
          (googleMapTag as HTMLElement).style.width = "inherit";
          (googleMapTag as HTMLElement).style.height = "inherit";
          innerMapContainer = (googleMapTag as HTMLElement).children[0];
          console.log(innerMapContainer as HTMLElement);
          if (innerMapContainer) {
              console.log((innerMapContainer as HTMLElement).style);
              (innerMapContainer as HTMLElement).style.width = "inherit";
              (innerMapContainer as HTMLElement).style.height = "inherit";
              console.log((innerMapContainer as HTMLElement).style);
          } else {
              console.log("innerMapContainer is null or does not exist");
          }  
        } else {
          console.log("googleMapTag does not exist")
        }
      } else {
        console.log("outerMapContainer does not exist")
      }
  }
    

  ngOnInit(): void {
  }

  displayMain = true;


}
