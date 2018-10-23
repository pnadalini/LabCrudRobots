import { TestBed } from '@angular/core/testing';

import { RobotApiService } from './robot-api.service';

describe('RobotApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotApiService = TestBed.get(RobotApiService);
    expect(service).toBeTruthy();
  });
});
