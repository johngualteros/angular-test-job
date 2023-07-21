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
 * @description
 * Not found page
 * @see NotfoundComponent
*/
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
