import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayedComponent } from './displayed.component';

describe('DisplayedComponent', () => {
  let component: DisplayedComponent;
  let fixture: ComponentFixture<DisplayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
