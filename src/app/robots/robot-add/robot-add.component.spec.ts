import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotAddComponent } from './robot-add.component';

describe('RobotAddComponent', () => {
  let component: RobotAddComponent;
  let fixture: ComponentFixture<RobotAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
