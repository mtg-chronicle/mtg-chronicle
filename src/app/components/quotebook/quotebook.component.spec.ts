import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotebookComponent } from './quotebook.component';

describe('QuotebookComponent', () => {
  let component: QuotebookComponent;
  let fixture: ComponentFixture<QuotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
