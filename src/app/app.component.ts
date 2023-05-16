import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponsiveService } from './services/responsive.service';
import { Viewsize } from './shared/models/viewsize.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navlist = [
    { page: 'Milestones', link: '/stories' },
    { page: 'Famous Quotes', link: '/quotes' },
    { page: 'Gallery', link: '/gallery' },
    { page: 'About Us', link: '/' }
  ];

  viewsize!: Viewsize;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private responsiveService: ResponsiveService
  ) {
    this.matIconRegistry.addSvgIcon('angular-solid',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/angular_solidBlack.svg")
    );
  }

  ngOnInit(): void {
    this.responsiveService.getViewsize().subscribe(viewsize => this.viewsize = viewsize);
  }


  @HostBinding('class')
  get viewsizeCategory(): string {
    return this.viewsize.category;
  }


}
