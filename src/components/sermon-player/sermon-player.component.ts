import { Component, AfterViewInit, ViewChild, ElementRef, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'sermon-player',
  templateUrl: './sermon-player.component.html',
  styleUrls: ['./sermon-player.component.css']
})
export class SermonPlayerComponent implements AfterViewInit {
  @ViewChild('youTubePlayer') youTubePlayer: ElementRef<HTMLDivElement>;
  videoHeight: number | undefined;
  videoWidth: number | undefined;
  @Input('videoID') videoID: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.videoID = '';
    this.youTubePlayer = new ElementRef<HTMLDivElement>(document.createElement('div'));
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    this.videoWidth = Math.min(this.youTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6; // Adjust the ratio as needed
    this.changeDetectorRef.detectChanges();
  }
}
