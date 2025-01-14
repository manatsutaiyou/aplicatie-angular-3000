/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutentificareService } from './autentificare.service';

describe('Service: Autentificare', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificareService]
    });
  });

  it('should ...', inject([AutentificareService], (service: AutentificareService) => {
    expect(service).toBeTruthy();
  }));
});
