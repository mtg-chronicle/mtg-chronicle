import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SvgIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { }


  addSvgIcon(icoName: string, url: string) {
    this.matIconRegistry.addSvgIcon(icoName,
      this.domSanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }
}
