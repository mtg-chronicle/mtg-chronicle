import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gallery', component: UpcomingComponent },
  { path: 'quotes', component: UpcomingComponent },
  { path: 'stories', component: StoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
