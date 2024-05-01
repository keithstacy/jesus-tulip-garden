import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bulletin, BulletinData } from '../../interfaces/bulletin';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.css']
})

export class BulletinListComponent implements OnInit {
  bulletins: Bulletin[] = [];

  constructor(private http: HttpClient, 
    private router: Router, 
    private viewportScroller: ViewportScroller) {
      this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd)).subscribe(() => {
          this.viewportScroller.scrollToPosition([0,0]);
        });
    }

   ngOnInit(): void {

    this.http.get<BulletinData>('/assets/data/data.json').subscribe(data => {
      this.bulletins = data.bulletins;
      console.log(data);
    })
 
  }
}
