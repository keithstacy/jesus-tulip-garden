import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-tithing',
  templateUrl: './tithing.component.html',
  styleUrls: ['./tithing.component.css']
})
export class TithingComponent implements AfterViewInit {

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

    ngAfterViewInit() {
      if (this.iframe.nativeElement.contentWindow.document.readyState === "complete") {
        this.onIframeLoad();
      }
    }

    onIframeLoad() {
      this.isLoading = false;
    }

}
