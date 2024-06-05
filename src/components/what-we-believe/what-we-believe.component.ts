import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from '../../interfaces/menu-items';

@Component({
  selector: 'app-what-we-believe',
  templateUrl: './what-we-believe.component.html',
  styleUrls: ['./what-we-believe.component.css']
})
export class WhatWeBelieveComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private containerRef: ViewContainerRef, 
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
    this.menuItems = [
      {
        order: 0,
        text: "Main Page",
        route: "",
        fragment: "",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 1,
        text: "Who We Are",
        route: "/who-are-we",
        fragment: "",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 2,
        text: "Join With Us",
        route: "/join-with-us",
        fragment: "",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 3,
        text: "About...",
        route: "null",
        fragment: "null",
        hasSubmenu: true,
        submenu: [
          {
            order: 0,
            text: "The Bible",
            route: "/what-we-believe",
            fragment: "the-bible",
            hasSubmenu: false,
            submenu: []
          },
          {
            order: 1,
            text: "Faith",
            route: "/what-we-believe",
            fragment: "faith",
            hasSubmenu: false,
            submenu: []
          },
          {
            order: 2,
            text: "Grace",
            route: "/what-we-believe",
            fragment: "grace",
            hasSubmenu: false,
            submenu: []
          },
          {
            order: 3,
            text: "Jesus Christ",
            route: "/what-we-believe",
            fragment: "jesus",
            hasSubmenu: false,
            submenu: []
          },
          {
            order: 4,
            text: "Life's Meaning",
            route: "/what-we-believe",
            fragment: "meaning",
            hasSubmenu: false,
            submenu: []
          }
        ]
      },
      {
        order: 4,
        text: "Return to Top",
        route: "/what-we-believe",
        fragment: "top",
        hasSubmenu: false,
        submenu: []
      }
    ]
  }

}
