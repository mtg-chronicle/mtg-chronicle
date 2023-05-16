import { Directive, HostBinding } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';

@Directive({
  selector: '[responsive]'
})
export class ResponsiveDirective {

  @HostBinding('class')
  private viewsize: string = '';

  constructor(private responsiveService: ResponsiveService) {
    this.responsiveService.getViewsize().subscribe(size => { this.viewsize = size.category });
  }

}
