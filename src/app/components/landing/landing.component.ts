import { Component, OnInit } from '@angular/core';
import { ResponsiveComponent } from '../responsive/responsive.component';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'mtg-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends ResponsiveComponent implements OnInit {

  constructor(responsiveService: ResponsiveService) {
    super(responsiveService);
  }


}
