import { TestBed } from '@angular/core/testing';

import { TelefonieService } from './telefonie.service';

describe('TelefonieService', () => {
  let service: TelefonieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefonieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
