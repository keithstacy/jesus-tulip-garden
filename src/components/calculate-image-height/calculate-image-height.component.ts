import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate-image-height',
  standalone: true,
  template: '',
})
export class CalculateImageHeightComponent {
  calculateImageHeight(
    contentHeight: number,
    footerHeight: number
  ): number {
    // Your logic here
    return contentHeight - footerHeight / 2;
  }
}
