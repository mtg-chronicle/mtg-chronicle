import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Milestone } from 'src/app/shared/models/milestone.model';

@Component({
  selector: 'mtg-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  milestones: Milestone[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Milestone[]>('/assets/json/milestones.json')
      .subscribe(milestones => this.milestones = milestones);
  }

  ngOnInit(): void {
  }

}
