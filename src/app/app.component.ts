import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { ResponsiveService } from './services/responsive.service';
import { SvgIconService } from './services/svg-icon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends ResponsiveComponent {

  navlist = [
    { page: 'Milestones', link: '/stories' },
    { page: 'Famous Quotes', link: '/quotes' },
    { page: 'Gallery', link: '/gallery' },
    { page: 'About', link: '/' }
  ];

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(
    private svgIconService: SvgIconService,
    responsiveService: ResponsiveService
  ) {
    super(responsiveService);
    this.svgIconService.addSvgIcon('angular-solid', '/assets/images/angular_solidBlack.svg');

  }


  onListItemClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const listitem = target.closest('[mat-list-item]');

    if (listitem) {
      this.sidenav.close();
    }
  }

}
