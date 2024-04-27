import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sermon, SermonData } from '../../interfaces/sermon';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})

export class SermonsComponent implements OnInit {
  sermons: Sermon[] = [];

  constructor(private http: HttpClient) {}
  videoId = 'GhIxrwWisSY';

  ngOnInit(): void {
    this.http.get<SermonData>('/assets/data/data.json').subscribe(data => {
      this.sermons = data.sermons;
      console.log(data);
    })
  }
}
