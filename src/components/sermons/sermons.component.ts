import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sermon, SermonData } from '../../interfaces/sermon';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from 'src/interfaces/menu-items';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})

export class SermonsComponent implements OnInit {
  sermons: Sermon[] = [];
  menuItems: MenuItem[] = [];

  constructor(private http: HttpClient, 
    private router: Router, 
    private viewportScroller: ViewportScroller) { 
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.viewportScroller.scrollToPosition([0,0]);
        });
    }

  ngOnInit(): void {
    this.http.get<SermonData>('/assets/data/data.json').subscribe(data => {
      this.sermons = data.sermons;
      console.log(data);
    })
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
        text: "Church Bulletins",
        route: "/bulletin-list",
        fragment: "",
        hasSubmenu: false,
        submenu: []
      },
      {
        order: 2,
        text: "Member Giving",
        route: "/tithing",
        fragment: "",
        hasSubmenu: false,
        submenu: []
      }
    ]

  }
}
