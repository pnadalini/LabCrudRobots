import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsGridComponent } from './robots-grid.component';

describe('RobotsGridComponent', () => {
  let component: RobotsGridComponent;
  let fixture: ComponentFixture<RobotsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
