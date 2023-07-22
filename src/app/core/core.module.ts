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

/**
 * Shared module
 * @see SharedModule
 * @description
 * This module contains reusable components, directives, pipes, etc.
 */
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
