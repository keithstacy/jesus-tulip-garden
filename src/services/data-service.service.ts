import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getJson(): void {
    fetch("../assets/data/data.json").then(res => res.json()).then(console.log);
  }
}
