import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LoadingInterceptor } from './loading.interceptor';
import { environment } from 'src/environments/environment.development';
import { GamesService } from '../services/games.service';

describe('LoadingInterceptor', () => {
  let httpMock: HttpTestingController;
  let apiUrl = environment.apiURL;
  let gamesService: GamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoadingInterceptor],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should intercept', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor.intercept).toBeTruthy();
  });

  it('should intercept when the http is executed', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    gamesService = TestBed.inject(GamesService);
    gamesService.getGame(2).subscribe();
    const mockRequest = httpMock.expectOne(`${apiUrl}/game?id=2`);
    expect(mockRequest.request.method).toBe('GET');
    expect(interceptor.intercept).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });  
});
