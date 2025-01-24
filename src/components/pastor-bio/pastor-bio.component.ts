import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from '../../interfaces/menu-items';

@Component({
  selector: 'app-pastor-bio',
  templateUrl: './pastor-bio.component.html',
  styleUrl: './pastor-bio.component.css'
})
export class PastorBioComponent implements OnInit  {
  menuItems: MenuItem[] = [];

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
