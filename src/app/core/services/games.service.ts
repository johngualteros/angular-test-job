import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Game } from '../interfaces/game';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DetailGame } from '../interfaces/detail-game';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiURL;
  public games: Game[] = [];

  getFilteredGames(platform: string = '', genre: string = ''): Observable<Game[]> {
    let params = new HttpParams();
    if (platform != '') {
      params = params.append('platform', platform);
    }
    if (genre != '') {
      params = params.append('category', genre);
    }
    return this.http.get<Game[]>(`${this.apiUrl}/games` , { params }).pipe(
      map((response: any) => {
        // Transform the response of api if it's necessary
        return response;
      }),
      // save the last emitted value and share it with subscribers
      shareReplay(1)
    );
  }

  getGame(id: number) {
    return this.http.get<DetailGame>(`${this.apiUrl}/game?id=${id}`);
  }
}