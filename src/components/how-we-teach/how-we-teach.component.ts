import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-how-we-teach',
  templateUrl: './how-we-teach.component.html',
  styleUrls: ['./how-we-teach.component.css']
})
export class HowWeTeachComponent implements OnInit {
  
  constructor(private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    console.log('Content loaded');
  }

  returnToMain(){
    console.log('returnToMain called')
  }
}
