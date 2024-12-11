import { TestBed } from '@angular/core/testing';

import { ProccessHttpmsgService } from './proccess-httpmsg.service';

describe('ProccessHttpmsgService', () => {
  let service: ProccessHttpmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProccessHttpmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
