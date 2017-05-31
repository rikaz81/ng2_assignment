import { TestBed, inject } from '@angular/core/testing';

import { VechicleService } from './vechicle.service';

describe('VechicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VechicleService]
    });
  });

  it('should ...', inject([VechicleService], (service: VechicleService) => {
    expect(service).toBeTruthy();
  }));
});
