import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mtg-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit {
  @Input()
  year: string = '1900';
  @Input()
  headline: string = '';
  @Input()
  story: string = '';
  @Input()
  imageSource: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
