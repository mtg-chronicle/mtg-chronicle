import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Milestone } from 'src/app/shared/models/milestone.model';
import { Viewsize } from 'src/app/shared/models/viewsize.model';
import { ResponsiveComponent } from '../responsive/responsive.component';

@Component({
  selector: 'mtg-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent extends ResponsiveComponent {

  milestones: Milestone[] = [];

  constructor(
    responsiveService: ResponsiveService,
    private http: HttpClient
  ) {
    super(responsiveService);
    this.http.get<Milestone[]>('/assets/json/milestones.json')
      .subscribe(milestones => this.milestones = milestones);
  }

}
