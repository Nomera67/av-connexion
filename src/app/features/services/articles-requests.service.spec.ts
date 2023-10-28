import { TestBed } from '@angular/core/testing';

import { ArticlesRequestsService } from './articles-requests.service';

describe('ArticlesRequestsService', () => {
  let service: ArticlesRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
