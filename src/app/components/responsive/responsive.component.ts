import { Component, HostBinding, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Viewsize } from 'src/app/shared/models/viewsize.model';

@Component({
  selector: 'mtg-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss']
})
export class ResponsiveComponent implements OnInit {

  viewsize!: Viewsize;

  constructor(protected responsiveService: ResponsiveService) {
    this.responsiveService.getViewsize().subscribe(vs => this.viewsize = vs);
  }


  @HostBinding('class')
  get viewsizeCategory(): string {
    return this.viewsize.category;
  }

  ngOnInit(): void {
    this.responsiveService.getViewsize().subscribe(viewsize => this.viewsize = viewsize);
  }

}
