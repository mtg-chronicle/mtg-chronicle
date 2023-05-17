import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { ResponsiveComponent } from '../responsive/responsive.component';

@Component({
  selector: 'mtg-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent extends ResponsiveComponent {

  constructor(responsiveService: ResponsiveService) {
    super(responsiveService);
  }

}
