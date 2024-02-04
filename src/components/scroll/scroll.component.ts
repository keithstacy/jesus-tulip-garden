//This code is impacted by the jitter issue
import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntroComponent } from '../intro/intro.component'
import { ChurchFamilyComponent } from '../church-family/church-family.component';
import { GlobalFamilyComponent } from '../global-family/global-family.component';
import { FindUsComponent } from '../find-us/find-us.component';


@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ScrollComponent {
  @ViewChild('intro') intro!: IntroComponent;
  @ViewChild('churchFamily') churchFamily!: ChurchFamilyComponent;
  @ViewChild('globalFamily') globalFamily!: GlobalFamilyComponent;
  @ViewChild('findUs') findUs!: FindUsComponent;
  
  scrollTo(component: IntroComponent | ChurchFamilyComponent | GlobalFamilyComponent | FindUsComponent) {
    component.elementRef.nativeElement.scrollIntoView({behavior: "smooth"});
  }

  scrollToChurchFamily() {
    //this.churchFamily.elementRef.nativeElement.scrollIntoView({behavior: "smooth"});
    this.scrollTo(this.churchFamily);
  }
  
  scrollToGlobalFamily() {
    //this.globalFamily.elementRef.nativeElement.scrollIntoView({behavior: "smooth"});
    this.scrollTo(this.globalFamily);
  }
  
  scrollToFindUs() {
    //this.findUs.elementRef.nativeElement.scrollIntoView({behavior: "smooth"});
    this.scrollTo(this.findUs);
  }
}
