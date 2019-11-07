import { TestBed } from '@angular/core/testing';

import { RichiestaService } from './richiesta.service';

describe('RichiestaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RichiestaService = TestBed.get(RichiestaService);
    expect(service).toBeTruthy();
  });
});
