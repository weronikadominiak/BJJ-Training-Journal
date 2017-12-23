import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRatingComponent } from './display-rating.component';

describe('DisplayRatingComponent', () => {
  let component: DisplayRatingComponent;
  let fixture: ComponentFixture<DisplayRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
