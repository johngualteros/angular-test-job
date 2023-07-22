import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private apiUrl = environment.apiURL;
}