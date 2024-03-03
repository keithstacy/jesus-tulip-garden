import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/components/main/main.component';
import { WhoAreWeComponent } from 'src/components/who-are-we/who-are-we.component';
import { WhatWeBelieveComponent } from 'src/components/what-we-believe/what-we-believe.component';
import { JoinWithUsComponent } from 'src/components/join-with-us/join-with-us.component';
import { ForeignMissionsComponent } from 'src/components/foreign-missions/foreign-missions.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'who-are-we', component: WhoAreWeComponent },
  { path: 'what-we-believe', component: WhatWeBelieveComponent },
  { path: 'join-with-us', component: JoinWithUsComponent },
  { path: 'foreign-missions', component:ForeignMissionsComponent }
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
