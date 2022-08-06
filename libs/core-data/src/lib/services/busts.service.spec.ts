import { TestBed } from '@angular/core/testing';

import { BustsService } from './busts.service';

describe('BustsService', () => {
  let service: BustsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BustsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
