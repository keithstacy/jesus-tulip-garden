import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { MenuItem } from 'src/interfaces/menu-items';


@Component({
  selector: 'app-tithing',
  templateUrl: './tithing.component.html',
  styleUrls: ['./tithing.component.css']
})
export class TithingComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[] = [];
  imageUrl = "AnivMedPortrait.jpg";

  constructor(private router: Router, 
    private viewportScroller: ViewportScroller) { 
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.viewportScroller.scrollToPosition([0,0]);
        });
    }

    url: string = "https://app.tithely.com/login";
    isLoading = true;
    @ViewChild("iframe") iframe!: ElementRef;

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
          text: "Pastor's Sermons",
          route: "/sermons",
          fragment: "",
          hasSubmenu: false,
          submenu: []
        },
        {
          order: 2,
          text: "Church Bulletins",
          route: "/bulletin-list",
          fragment: "",
          hasSubmenu: false,
          submenu: []
        }
      ]
  
    }

    ngAfterViewInit() {
      if (this.iframe.nativeElement.contentWindow.document.readyState === "complete") {
        this.onIframeLoad();
      }
    }

    onIframeLoad() {
      this.isLoading = false;
    }

}
