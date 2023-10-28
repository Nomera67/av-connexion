import { TestBed } from '@angular/core/testing';

import { TeamRequestService } from './team-request.service';

describe('TeamRequestService', () => {
  let service: TeamRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
