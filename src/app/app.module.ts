import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './components/landing/landing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SocialHubComponent } from './components/social-hub/social-hub.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { RedHandleComponent } from './components/red-handle/red-handle.component';
import { ResponsiveDirective } from './directivs/responsive.directive';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { QuotebookComponent } from './components/quotebook/quotebook.component';
import { QuoteComponent } from './components/quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UpcomingComponent,
    StoriesComponent,
    SocialHubComponent,
    MilestoneComponent,
    RedHandleComponent,
    ResponsiveDirective,
    ResponsiveComponent,
    QuotebookComponent,
    QuoteComponent
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
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
