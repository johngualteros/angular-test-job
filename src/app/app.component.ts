import { Component, OnInit } from '@angular/core';
import { ThemesService } from './core/design/services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.stablishTheme(this.themesService.getTheme());
  }
}
