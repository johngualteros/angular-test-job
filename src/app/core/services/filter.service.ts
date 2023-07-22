import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private platformFilterSubject = new BehaviorSubject<string>(''); // BehaviorSubject para mantener el valor actual y notificar a los observadores
  private genreFilterSubject = new BehaviorSubject<string>(''); // BehaviorSubject para mantener el valor actual y notificar a los observadores
  platformFilter$ = this.platformFilterSubject.asObservable(); // Observable que los componentes pueden suscribirse para recibir actualizaciones
  genreFilter$ = this.genreFilterSubject.asObservable(); // Observable que los componentes pueden suscribirse para recibir actualizaciones

  setPlatformFilter(platform: string) {
    this.platformFilterSubject.next(platform); // Actualiza el valor del filtro y notifica a los observadores
  }

  setGenreFilter(genre: string) {
    this.genreFilterSubject.next(genre); // Actualiza el valor del filtro y notifica a los observadores
  }
}
