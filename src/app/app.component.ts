import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { ResponsiveService } from './services/responsive.service';
import { Viewsize } from './shared/models/viewsize.model';


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
    { page: 'About Us', link: '/' }
  ];

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    responsiveService: ResponsiveService
  ) {
    super(responsiveService);
    this.matIconRegistry.addSvgIcon('angular-solid',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/angular_solidBlack.svg")
    );
  }

  onListItemClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const listitem = target.closest('[mat-list-item]');

    if (listitem) {
      this.sidenav.close();
    }
  }

}
