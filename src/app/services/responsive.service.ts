import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  private viewsize$: Observable<string>;

  constructor(
    private breakpointObserver: BreakpointObserver) {
    this.viewsize$ = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.XSmall
    ]).pipe(
      map(result => {
        return (result.matches) ? '' : 'small'
      }),
      distinctUntilChanged()
    );
  }

  getViewsize(): Observable<string> {
    return this.viewsize$;
  }
}
