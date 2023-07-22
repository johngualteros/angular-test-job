import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    LoaderComponent,
    DetailComponent,
    FilterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class GamesModule { }
