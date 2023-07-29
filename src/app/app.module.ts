import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TempComponent } from '../components/temp/temp.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from '../components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
