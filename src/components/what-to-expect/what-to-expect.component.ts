import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from '../../interfaces/menu-items';


@Component({
  selector: 'app-what-to-expect',
  templateUrl: './what-to-expect.component.html',
  styleUrl: './what-to-expect.component.css'
})
export class WhatToExpectComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private  containerRef: ViewContainerRef, 
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
        text: "What We Believe",
        route: "/what-we-believe",
        fragment: "",
        hasSubmenu: false,
        submenu: []
      }
    ]
  }

}
