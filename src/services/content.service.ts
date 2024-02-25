import { ApplicationRef, Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { HowWeTeachComponent } from 'src/components/how-we-teach/how-we-teach.component';
import { OurLeadersComponent } from 'src/components/our-leaders/our-leaders.component';
import { WhatWeBelieveComponent } from 'src/components/what-we-believe/what-we-believe.component';
import { WorshipServiceComponent } from 'src/components/worship-service/worship-service.component';
import { ForeignMissionsComponent } from 'src/components/foreign-missions/foreign-missions.component';
import { LocalOutreachComponent } from 'src/components/local-outreach/local-outreach.component';
import { MainComponent } from 'src/components/main/main.component';
import { PrayerComponent } from 'src/components/prayer/prayer.component';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private applicationRef: ApplicationRef) { this._introViewed = false; }

  private _introViewed: boolean;

  get IntroViewed() {
    return this._introViewed;
  }
  set IntroViewed(value) {
    this._introViewed = value;
  }

  LoadContentComponent(containerRef: ViewContainerRef, id: number) {
  }

  LoadMainComponent(containerRef: ViewContainerRef) {
    const rootComponentType = this.applicationRef.componentTypes[0];
    const componentRef = this.applicationRef.bootstrap(rootComponentType);
  }

}
