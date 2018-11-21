import { TestBed, inject } from '@angular/core/testing';

import { TrabajoService } from './trabajo.service';

describe('TrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrabajoService]
    });
  });

  it('should be created', inject([TrabajoService], (service: TrabajoService) => {
    expect(service).toBeTruthy();
  }));
});
