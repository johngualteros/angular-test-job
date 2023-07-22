import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from './components/separator/separator.component';



@NgModule({
  declarations: [
    SeparatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeparatorComponent
  ]
})
export class SharedModule { }
