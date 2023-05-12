import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHubComponent } from './social-hub.component';

describe('SocialHubComponent', () => {
  let component: SocialHubComponent;
  let fixture: ComponentFixture<SocialHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
