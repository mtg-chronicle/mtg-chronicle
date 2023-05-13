import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedHandleComponent } from './red-handle.component';

describe('RedHandleComponent', () => {
  let component: RedHandleComponent;
  let fixture: ComponentFixture<RedHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedHandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
