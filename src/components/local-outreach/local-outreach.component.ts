import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-local-outreach',
  templateUrl: './local-outreach.component.html',
  styleUrls: ['./local-outreach.component.css']
})
export class LocalOutreachComponent implements OnInit {
  
  constructor(private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
  }
}
