import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Bulletin, BulletinData } from '../../interfaces/bulletin';

@Component({
  selector: 'app-bulletin-list',
  templateUrl: './bulletin-list.component.html',
  styleUrls: ['./bulletin-list.component.css']
})

export class BulletinListComponent implements OnInit {
  bulletins: Bulletin[] = [];

  constructor(private http: HttpClient) { }

   ngOnInit(): void {

    this.http.get<BulletinData>('/assets/data/data.json').subscribe(data => {
      this.bulletins = data.bulletins;
      console.log(data);
    })
 
  }
}
