import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './components/landing/landing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SocialHubComponent } from './components/social-hub/social-hub.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { RedHandleComponent } from './components/red-handle/red-handle.component';
import { ResponsiveDirective } from './directivs/responsive.directive';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UpcomingComponent,
    StoriesComponent,
    SocialHubComponent,
    MilestoneComponent,
    RedHandleComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
