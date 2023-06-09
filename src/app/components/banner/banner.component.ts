import { Component, Input, OnInit } from '@angular/core';
import { ResponsiveComponent } from '../responsive/responsive.component';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'mtg-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends ResponsiveComponent implements OnInit {

  @Input()
  position: string = 'left';

  @Input()
  backdrop: string = '';

  constructor(responsiveService: ResponsiveService) {
    super(responsiveService);
  }

  get backgroundImage(): string {
    return `url(${this.backdrop})`;
  }
}
