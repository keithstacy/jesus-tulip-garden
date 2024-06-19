import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  year: string = "2024";

  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }
}
