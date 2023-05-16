import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Milestone } from 'src/app/shared/models/milestone.model';

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

  constructor() { }

  ngOnInit(): void {
  }

  get greyFilter(): string {
    return `grayscale(${this.greyscale})`;
  }

}
