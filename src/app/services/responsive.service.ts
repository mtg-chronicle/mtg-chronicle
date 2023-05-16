import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Viewsize } from '../shared/models/viewsize.model';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private viewsize$: Observable<Viewsize>;

  constructor(
    private breakpointObserver: BreakpointObserver) {
    this.viewsize$ = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).pipe(
      map(result => {
        var sizeCate = (result.matches) ? Viewsize.SMALL : Viewsize.DEFAULT;
        return new Viewsize(sizeCate);
      }),
      distinctUntilChanged()
    );
  }

  getViewsize(): Observable<Viewsize> {
    return this.viewsize$;
  }
}
