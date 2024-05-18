import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Bulletin, BulletinData } from '../../interfaces/bulletin';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { MenuItem } from 'src/interfaces/menu-items';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.css']
})

export class BulletinListComponent implements OnInit, AfterViewInit {
  menuItems: MenuItem[] = [];
  imageUrl = "../../assets/img/AnivMedPortrait.jpg";
  bulletins: Bulletin[] = [];
  @ViewChild('footer', { read: ElementRef }) footer!: ElementRef;
  @ViewChild('imageContainer', { read: ElementRef }) imageContainer!: ElementRef;
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;

  constructor(private http: HttpClient, 
    private router: Router, 
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2) { 
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
        text: "Pastor's Sermons",
        route: "/sermons",
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

    window.addEventListener("resize", () => {
      this.viewportScroller.scrollToPosition([0,0]);
      this.calculateImageHeight();
    })
    this.http.get<BulletinData>('/assets/data/data.json').subscribe(data => {
      this.bulletins = data.bulletins;
      console.log(data);
    })
 
  }
  ngAfterViewInit(): void {
    this.calculateImageHeight();
  }

  calculateImageHeight() {
    setTimeout(() => {
      const footerHeight = this.footer.nativeElement.offsetHeight;
      const contentHeight = this.content.nativeElement.offsetHeight;
      let imageHeight = contentHeight - footerHeight / 2;
      console.log(`footerHeight: ${footerHeight}; contentHeight: ${contentHeight}; imageHeight: ${imageHeight}`);
      this.renderer.setStyle(this.imageContainer.nativeElement, "height", `${imageHeight}px`);
    }, 0);
  }
}
