import { ApplicationRef, Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { FindUsComponent } from 'src/components/find-us/find-us.component';
import { GlobalFamilyComponent } from 'src/components/global-family/global-family.component';
import { HowWeTeachComponent } from 'src/components/how-we-teach/how-we-teach.component';
import { OurLeadersComponent } from 'src/components/our-leaders/our-leaders.component';
import { WhatWeBelieveComponent } from 'src/components/what-we-believe/what-we-believe.component';
import { WorshipServiceComponent } from 'src/components/worship-service/worship-service.component';
import { ChurchFamilyComponent } from 'src/components/church-family/church-family.component';
import { ForeignMissionsComponent } from 'src/components/foreign-missions/foreign-missions.component';
import { LocalOutreachComponent } from 'src/components/local-outreach/local-outreach.component';
import { MainComponent } from 'src/components/main/main.component';
import { PrayerComponent } from 'src/components/prayer/prayer.component';
import { IntroComponent } from 'src/components/intro/intro.component';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private applicationRef: ApplicationRef) { }

  LoadContentComponent(containerRef: ViewContainerRef, id: number) {
    console.log('loadComponent called with ID of ' + id);
    if (id == 1) {
      const componentRef = containerRef.createComponent(ChurchFamilyComponent);
    }
    else if (id == 2) {
      const componentRef = containerRef.createComponent(ForeignMissionsComponent);
    }
    else if (id == 3) {
      const componentRef = containerRef.createComponent(LocalOutreachComponent);
    }
    else if (id == 4) {
      const componentRef = containerRef.createComponent(PrayerComponent);
    }
    else if (id == 5){
      const componentRef = containerRef.createComponent(WorshipServiceComponent);
    }
    else if (id == 6) {
      const componentRef = containerRef.createComponent(GlobalFamilyComponent);
    }
    else if (id == 7) {
      const componentRef = containerRef.createComponent(WhatWeBelieveComponent);
    }
    else if (id == 8) {
      const componentRef = containerRef.createComponent(HowWeTeachComponent);
    }
    else if (id == 9) {
      const componentRef = containerRef.createComponent(OurLeadersComponent);
    }
    else if (id == 10) {
      const componentRef = containerRef.createComponent(FindUsComponent);
    }
    else {
      const componentRef = containerRef.createComponent(IntroComponent);
    }
  }

  LoadMainComponent(containerRef: ViewContainerRef) {
    const rootComponentType = this.applicationRef.componentTypes[0];
    const componentRef = this.applicationRef.bootstrap(rootComponentType);
  }

}
