import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/core/design/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent {
  constructor(public loader: LoaderService) { }
}
