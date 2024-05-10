import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.css']
})
export class WhoAreWeComponent implements OnInit, AfterViewInit {
  imageUrl = "../../assets/img/AnivMedPortrait.jpg";
  @ViewChild('footer', { read: ElementRef }) footer!: ElementRef;
  @ViewChild('imageContainer', { read: ElementRef }) imageContainer!: ElementRef;
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;

  constructor(private router: Router, 
              private viewportScroller: ViewportScroller,
              private renderer: Renderer2) { 
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.viewportScroller.scrollToPosition([0,0]);
        });
    }

    ngOnInit(): void {
      window.addEventListener("resize", () => {
        this.viewportScroller.scrollToPosition([0,0]);
        this.calculateImageHeight();
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
        this.renderer.setStyle(this.imageContainer.nativeElement, "height", `${imageHeight}px`);
      }, 0);
    }
}
