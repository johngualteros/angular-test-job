import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from './components/separator/separator.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    SeparatorComponent,
    CarouselComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SeparatorComponent,
    CarouselComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
