import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';

describe('GamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesService = TestBed.get(GamesService);
    expect(service).toBeTruthy();
  });
});
