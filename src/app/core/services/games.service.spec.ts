import { TestBed } from '@angular/core/testing';

import { GamesService } from './games.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment.development';

describe('GamesService', () => {
  let httpMock: HttpTestingController;
  let service: GamesService;
  let apiURL = environment.apiURL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GamesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have array of games', () => {
    expect(service.games).toBeTruthy();
  });

  it('should have method getFilteredGames', () => {
    expect(service.getFilteredGames).toBeTruthy();
  });

  it('should have method getGame', () => {
    expect(service.getGame).toBeTruthy();
  });

  it('should get all games', () => {
    service.getFilteredGames().subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const mockRequest = httpMock.expectOne(`${apiURL}/games`);
    expect(mockRequest.request.method).toBe('GET');
  });

  it('should get a game by id', () => {
    service.getGame(2).subscribe((response) => {
      expect(response).toBeTruthy();
    });
    const mockRequest = httpMock.expectOne(`${apiURL}/game?id=2`);
    expect(mockRequest.request.method).toBe('GET');
  });
});
