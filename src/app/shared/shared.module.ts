import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from './components/separator/separator.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    SeparatorComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SeparatorComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
