import { TestBed } from '@angular/core/testing';

import { MovsService } from './movs.service';

describe('MovsService', () => {
  let service: MovsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
