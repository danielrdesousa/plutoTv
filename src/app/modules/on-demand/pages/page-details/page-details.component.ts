import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PageTitleService } from '../../../../core/services/page-title.service';
import { ItemsService } from '../../../../core/services/items.service';

import { IItem } from '../../../../shared/models/item';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'tv-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss']
})
export class PageDetailsComponent implements OnInit {
  item!: IItem;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _pageTitleService: PageTitleService,
    private _itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    //  https://service-vod.clusters.pluto.tv/v4/vod/series/60c8f203e301960013db434a/seasons?offset=1000&page=1

    this._activatedRoute.params.pipe(
      map(params => params.slug),
      switchMap(slug => this._itemsService.getOne(slug))
    )
    .subscribe((item: IItem) => {
      this.item = item;

      this._pageTitleService.setPageTitle(item.name, '', true)
    });
  }

}
