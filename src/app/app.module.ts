import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { LandingComponent } from './components/landing/landing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SocialHubComponent } from './components/social-hub/social-hub.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UpcomingComponent,
    StoriesComponent,
    SocialHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
