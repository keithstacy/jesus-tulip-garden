import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/components/main/main.component';
import { WhoAreWeComponent } from 'src/components/who-are-we/who-are-we.component';
import { WhatWeBelieveComponent } from 'src/components/what-we-believe/what-we-believe.component';
import { JoinWithUsComponent } from 'src/components/join-with-us/join-with-us.component';
import { ForeignMissionsComponent } from 'src/components/foreign-missions/foreign-missions.component';
import { TheBibleComponent } from 'src/components/the-bible/the-bible.component';
import { JesusComponent } from 'src/components/jesus/jesus.component';
import { FaithComponent } from 'src/components/faith/faith.component';
import { GraceComponent } from 'src/components/grace/grace.component';
import { MeaningComponent } from 'src/components/meaning/meaning.component';  
import { TheSolasComponent } from 'src/components/the-solas/the-solas.component'; 
import { GivingComponent } from 'src/components/giving/giving.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'who-are-we', component: WhoAreWeComponent },
  { path: 'what-we-believe', component: WhatWeBelieveComponent },
  { path: 'join-with-us', component: JoinWithUsComponent },
  { path: 'foreign-missions', component: ForeignMissionsComponent },
  { path: 'the-bible', component: TheBibleComponent },
  { path: 'jesus', component: JesusComponent },
  { path: 'faith', component: FaithComponent },
  { path: 'grace', component: GraceComponent },
  { path: 'meaning', component: MeaningComponent },
  { path: 'the-solas', component: TheSolasComponent },
  { path: 'giving', component: GivingComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
