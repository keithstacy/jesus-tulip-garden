import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from 'src/components/intro/intro.component';
import { ChurchFamilyComponent } from 'src/components/church-family/church-family.component';
import { GlobalFamilyComponent } from 'src/components/global-family/global-family.component';
import { FindUsComponent } from 'src/components/find-us/find-us.component';
import { MainComponent } from 'src/components/main/main.component';
import { ContentComponent } from 'src/components/content/content.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'content', component: ContentComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'church-family', component: ChurchFamilyComponent },
  { path: 'global-family', component: GlobalFamilyComponent },
  { path: 'find-us', component: FindUsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
