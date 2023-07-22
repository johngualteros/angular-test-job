import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    LoaderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
