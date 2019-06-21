import {TestBed} from '@angular/core/testing';

import {OrderrService} from './orderr.service';

describe('OrderrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderrService = TestBed.get(OrderrService);
    expect(service).toBeTruthy();
  });
});
