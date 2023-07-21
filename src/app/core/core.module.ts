import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

/**
 * Components layout
 */
import { HeaderComponent } from './layout/header/header.component';

/**
 * Pages
 * @description
 * Home page
 * @see HomeComponent
*/
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
