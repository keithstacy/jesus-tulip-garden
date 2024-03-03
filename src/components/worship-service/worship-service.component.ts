import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-worship-service',
  templateUrl: './worship-service.component.html',
  styleUrls: ['./worship-service.component.css']
})
export class WorshipServiceComponent  implements OnInit {
  
  constructor(private contentSvc: ContentService, private containerRef: ViewContainerRef){}

  ngOnInit(): void {
    
  }
}
