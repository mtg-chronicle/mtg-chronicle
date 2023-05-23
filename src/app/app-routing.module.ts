import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { StoriesComponent } from './components/stories/stories.component';
import { QuotebookComponent } from './components/quotebook/quotebook.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gallery', component: UpcomingComponent },
  { path: 'quotes', component: QuotebookComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
