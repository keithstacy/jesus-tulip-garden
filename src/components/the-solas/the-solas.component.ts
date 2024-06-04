import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from '../../interfaces/menu-items';

@Component({
  selector: 'app-the-solas',
  templateUrl: './the-solas.component.html',
  styleUrls: ['./the-solas.component.css']
})
export class TheSolasComponent implements OnInit  {
  menuItems: MenuItem[] = [];

  constructor(private router: Router, 
    private viewportScroller: ViewportScroller) { 
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.viewportScroller.scrollToPosition([0,0]);
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
