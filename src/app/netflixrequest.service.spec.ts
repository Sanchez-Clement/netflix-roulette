import { TestBed, inject } from '@angular/core/testing';

import { NetflixrequestService } from './netflixrequest.service';

describe('NetflixrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetflixrequestService]
    });
  });

  it('should be created', inject([NetflixrequestService], (service: NetflixrequestService) => {
    expect(service).toBeTruthy();
  }));
});
