//// <reference types="@types/google.maps" />
import { Component, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from '../../interfaces/menu-items';
import { GoogleMapsModule } from '@angular/google-maps';
// import { GoogleMapsLoaderService } from 'src/services/google-maps-loader.service';
// import {} from 'google.maps';

declare var Microsoft: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[] = [];

  mapOptions: google.maps.MapOptions = {
    center: new google.maps.LatLng(44.723877,-93.929512),
    zoom: 12,
    backgroundColor: '#00ff00'
  }

  constructor(private containerRef: ViewContainerRef
    , private sanitizer: DomSanitizer
    , private router: Router
    , private viewportScroller: ViewportScroller
    , private route: ActivatedRoute
    // , private googleMapsLoaderService: GoogleMapsLoaderService
    ) { 
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
    this.menuItems = [
      {
        order: 0,
        text: "Our Church Family",
        route: "/",
        fragment: "church-family",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 1,
        text: "Our Global Family",
        route: "/",
        fragment: "global-family",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 2,
        text: "How to Find Us",
        route: "/",
        fragment: "find-us",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 3,
        text: "Return to Top",
        route: "/",
        fragment: "intro",
        hasSubmenu: false,
        submenu: []
      }
    ]
  }

  displayMain = true;


}
