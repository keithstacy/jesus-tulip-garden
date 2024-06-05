import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-our-leaders',
  templateUrl: './our-leaders.component.html',
  styleUrls: ['./our-leaders.component.css']
})
export class OurLeadersComponent implements OnInit {
  
  constructor(private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
  }
}