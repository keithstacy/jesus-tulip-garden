// google-maps-loader.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsLoaderService {
  private googleMapsScriptLoaded = false;

  constructor() { }

  loadGoogleMaps(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.googleMapsScriptLoaded) {
        resolve();
      } else {
        const scriptElement = document.createElement('script');
        scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
        scriptElement.async = true;
        scriptElement.defer = true;
        document.body.appendChild(scriptElement);
        scriptElement.onload = () => {
          this.googleMapsScriptLoaded = true;
          resolve();
        };
        scriptElement.onerror = (error) => {
          reject(error);
        };
      }
    });
  }
}
