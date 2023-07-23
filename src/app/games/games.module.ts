import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';

@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    DetailComponent,
    FilterComponent,
    SearchComponent,
    MiniCardComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule,
    FormsModule,
    NgOptimizedImage
  ]
})
export class GamesModule { }
