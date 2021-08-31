import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { SharedModule } from './../../shared/shared.module';
import { OnDemandRoutingModule } from './on-demand-routing.module';

import { ItemsService } from '../../core/services/items.service';
import { RatingDescriptorsService } from './../../core/services/rating-descriptos.service';
import { PageTitleService } from './../../core/services/page-title.service';

import { OnDemandComponent } from './on-demand.component';
import { PageOnDemandComponent } from './pages/page-on-demand/page-on-demand.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ListSeasonsComponent } from './components/list-seasons/list-seasons.component';
import { OpenGuideComponent } from './components/open-guide/open-guide.component';

@NgModule({
  declarations: [
    OnDemandComponent,
    PageOnDemandComponent,
    PageDetailsComponent,
    ItemDetailsComponent,
    CarouselItemsComponent,
    CategoriesComponent,
    ListSeasonsComponent,
    OpenGuideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    OnDemandRoutingModule
  ],
  providers: [
    PageTitleService,
    ItemsService,
    RatingDescriptorsService
  ]
})
export class OnDemandModule { }
