import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/components/main/main.component';
import { ContentComponent } from 'src/components/content/content.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'content', component: ContentComponent }
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
