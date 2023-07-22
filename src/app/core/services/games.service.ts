import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Game } from '../interfaces/game';
import { HttpClient } from '@angular/common/http';
import { DetailGame } from '../interfaces/detail-game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiURL;
  getGames() {
    // paginate
    return this.http.get<Game[]>(`${this.apiUrl}/games`);
  }

  getGame(id: number) {
    return this.http.get<DetailGame>(`${this.apiUrl}/game?id=${id}`);
  }
}