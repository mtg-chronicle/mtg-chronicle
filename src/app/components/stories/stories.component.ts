import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Milestone } from 'src/app/shared/models/milestone.model';
import { Viewsize } from 'src/app/shared/models/viewsize.model';

@Component({
  selector: 'mtg-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  milestones: Milestone[] = [];
  viewsize!: Viewsize;

  constructor(
    private responsiveService: ResponsiveService,
    private http: HttpClient
  ) {
    this.http.get<Milestone[]>('/assets/json/milestones.json')
      .subscribe(milestones => this.milestones = milestones);
  }

  ngOnInit(): void {
    this.responsiveService.getViewsize().subscribe(viewsize => this.viewsize = viewsize);
  }

  @HostBinding('class')
  get viewsizeCategory(): string {
    return this.viewsize.category;
  }

}
