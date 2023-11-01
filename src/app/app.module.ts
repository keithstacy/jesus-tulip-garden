import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from '../components/main/main.component';
import { ContentComponent } from '../components/content/content.component';
import { ForeignMissionsComponent } from '../components/foreign-missions/foreign-missions.component';
import { LocalOutreachComponent } from '../components/local-outreach/local-outreach.component';
import { PrayerComponent } from '../components/prayer/prayer.component';
import { WorshipServiceComponent } from '../components/worship-service/worship-service.component';
import { GlobalFamilyComponent } from '../components/global-family/global-family.component';
import { WhatWeBelieveComponent } from '../components/what-we-believe/what-we-believe.component';
import { HowWeTeachComponent } from '../components/how-we-teach/how-we-teach.component';
import { OurLeadersComponent } from '../components/our-leaders/our-leaders.component';
import { FindUsComponent } from '../components/find-us/find-us.component';
import { IntroComponent } from '../components/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContentComponent,
    ForeignMissionsComponent,
    LocalOutreachComponent,
    PrayerComponent,
    WorshipServiceComponent,
    GlobalFamilyComponent,
    WhatWeBelieveComponent,
    HowWeTeachComponent,
    OurLeadersComponent,
    FindUsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
