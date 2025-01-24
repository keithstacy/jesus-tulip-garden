import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from '../components/main/main.component';
import { ForeignMissionsComponent } from '../components/foreign-missions/foreign-missions.component';
import { LocalOutreachComponent } from '../components/local-outreach/local-outreach.component';
import { PrayerComponent } from '../components/prayer/prayer.component';
import { WorshipServiceComponent } from '../components/worship-service/worship-service.component';
import { WhatWeBelieveComponent } from '../components/what-we-believe/what-we-believe.component';
import { HowWeTeachComponent } from '../components/how-we-teach/how-we-teach.component';
import { WhoAreWeComponent } from '../components/who-are-we/who-are-we.component';
import { JoinWithUsComponent } from '../components/join-with-us/join-with-us.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TheBibleComponent } from '../components/the-bible/the-bible.component';
import { JesusComponent } from '../components/jesus/jesus.component';
import { FaithComponent } from '../components/faith/faith.component';
import { GraceComponent } from '../components/grace/grace.component';
import { MeaningComponent } from '../components/meaning/meaning.component';
import { TheSolasComponent } from '../components/the-solas/the-solas.component';
import { GivingComponent } from '../components/giving/giving.component';
import { BulletinListComponent } from '../components/bulletin-list/bulletin-list.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SermonsComponent } from '../components/sermons/sermons.component';
import { TithingComponent } from '../components/tithing/tithing.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SermonPlayerComponent } from '../components/sermon-player/sermon-player.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FooterComponent } from 'src/components/footer/footer.component';
import { HigherEdComponent } from 'src/components/higher-ed/higher-ed.component';
import { SafePipe } from 'src/pipes/safe.pipe';
import { PastorBioComponent } from 'src/components/pastor-bio/pastor-bio.component';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhatToExpectComponent } from '../components/what-to-expect/what-to-expect.component';

@NgModule({ declarations: [
        AppComponent,
        MainComponent,
        ForeignMissionsComponent,
        LocalOutreachComponent,
        PrayerComponent,
        WorshipServiceComponent,
        WhatWeBelieveComponent,
        HowWeTeachComponent,
        WhoAreWeComponent,
        JoinWithUsComponent,
        TheBibleComponent,
        JesusComponent,
        FaithComponent,
        GraceComponent,
        MeaningComponent,
        TheSolasComponent,
        GivingComponent,
        BulletinListComponent,
        SermonsComponent,
        TithingComponent,
        SermonPlayerComponent,
        FooterComponent,
        HigherEdComponent,
        SafePipe,
        PastorBioComponent,
        MenuBarComponent,
        WhatToExpectComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        YouTubePlayerModule,
        GoogleMapsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        BrowserAnimationsModule], providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
