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
  // url of api
  private apiUrl = environment.apiURL;
  // array of games
  public games: Game[] = [];

  /**
   * method for get all games from api can be filtered by platform and genre
   * @param platform 
   * @param genre 
   * @returns Observable<Game[]>
   */
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

  /**
   * method for get a game by id
   * @param id 
   * @returns 
   */
  getGame(id: number) {
    return this.http.get<DetailGame>(`${this.apiUrl}/game?id=${id}`);
  }
}