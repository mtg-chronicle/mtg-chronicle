import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive.service';
import { Milestone } from 'src/app/shared/models/milestone.model';
import { Viewsize } from 'src/app/shared/models/viewsize.model';

@Component({
  selector: 'mtg-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {
  @Input()
  milestone: Milestone = new Milestone;

  @Input()
  @HostBinding('class.milestone--alt')
  isAlt: boolean = false;

  @Input()
  greyscale: number = 0;

  viewsize!: Viewsize;

  constructor(private responsiveService: ResponsiveService) {
    this.responsiveService.getViewsize().subscribe(viewsize => this.viewsize = viewsize);
  }

  ngOnInit(): void {
  }

  get greyFilter(): string {
    return `grayscale(${this.greyscale})`;
  }

}
