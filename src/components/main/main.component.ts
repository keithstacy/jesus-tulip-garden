import { Component, OnInit, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContentService } from '../../services/content.service';

declare var Microsoft: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  safeUrl!: SafeResourceUrl;
  map: any;

  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef, private sanitizer: DomSanitizer) {

  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    let url = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCIXUW6dyc_LjqQX-E68thdZE_OacHewIA&destination=44.723877%2C-93.929512&zoom=12&origin=home&center=44.723877%2C-93.929512';
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  displayMain = true;


}
