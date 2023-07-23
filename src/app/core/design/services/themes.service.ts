import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  constructor() { }
  theme$: EventEmitter<String> = new EventEmitter();

  setTheme(theme: String) {
    this.theme$.emit(theme);
    // add variable to local storage
    localStorage.setItem('theme', theme.toString());
  }

  getTheme() {
    return localStorage.getItem('theme') || 'blue';
  }

  stablishTheme(theme: String) {
    document.body.className = theme.toString();
  }
}
