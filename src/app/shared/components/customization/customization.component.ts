import { Component, OnInit } from '@angular/core';
import { ThemesService } from 'src/app/core/design/services/themes.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent{
  constructor(private themesService: ThemesService) { }
  setTheme(theme: String) {
    this.themesService.setTheme(theme);
    this.themesService.stablishTheme(theme);
  }

}
