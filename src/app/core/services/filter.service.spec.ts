import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set platform filter', () => {
    service.setPlatformFilter('platform');
    service.platformFilter$.subscribe((platform) => {
      expect(platform).toBe('platform');
    });
  });

  it('should set genre filter', () => {
    service.setGenreFilter('genre');
    service.genreFilter$.subscribe((genre) => {
      expect(genre).toBe('genre');
    });
  });
});
