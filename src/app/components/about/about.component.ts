import { ApplicationService } from 'src/app/services/application.service';

import { Component, OnInit } from '@angular/core';
import { ResponsiveComponent } from '../responsive/responsive.component';
import { ResponsiveService } from 'src/app/services/responsive.service';
@Component({
  selector: 'mtg-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends ResponsiveComponent implements OnInit {

  constructor(
    responsiveService: ResponsiveService,
    public appService: ApplicationService
  ) {
    super(responsiveService);
  }


}
