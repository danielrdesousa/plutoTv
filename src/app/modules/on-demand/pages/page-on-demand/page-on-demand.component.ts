import { PageTitleService } from './../../../../core/services/page-title.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { combineLatest, merge } from 'rxjs';

import { CategoriesService } from '../../../../core/services/categories.service';
import { ItemsService } from '../../../../core/services/items.service';

import { ICategory } from '../../../../shared/models/category';
import { IItem } from '../../../../shared/models/item';

import * as _ from 'lodash';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'tv-page-on-demand',
  templateUrl: './page-on-demand.component.html',
  styleUrls: ['./page-on-demand.component.scss']
})
export class PageOnDemandComponent {
  categories!: ICategory[];
  loadedCategories: boolean = false;
  groupItems: any[] = [];
  loadedItems: boolean = false;

  pictureInPicture: boolean = false;

  constructor(
    private _pageTitleService: PageTitleService,
    private _categoriesService: CategoriesService,
    private _itemsService: ItemsService
  ) {
    this._pageTitleService.setPageTitle('On Demand');
    this.getData();
  }

  getData() {
    this._categoriesService.findAll().pipe(
      switchMap((categories: ICategory[]) => {
          // loaded categories
          this.categories = categories;
          this.loadedCategories = true;

          const items = categories.map((category: ICategory) => {
            return this._itemsService.findAll(category.id);
        });
        return merge(...items);
      })
    ).subscribe((items: IItem[]) => {
      this.groupItems.push(items);
      this.loadedItems = true;
    });
  }

  @HostListener('scroll', ['$event'])
  markCategoryBasedScroll() {
    const categories = document.querySelectorAll(".categories__item");
    let positionTopToContainer = document.querySelector(".content")?.scrollTop;

    let positions: number[] = [];
    categories.forEach((c, i) => positions.push((i+1)*218));
    positions[0] = 215;

    let index = positions.findIndex(p => positionTopToContainer && positionTopToContainer < p);

    if(categories[index]){
      categories.forEach(a => a.classList.remove('categories__item--active'));
      categories[index].classList.add('categories__item--active');
    }
  }

  handlerPlayerVideo(fullScreen: boolean): void {
    this.pictureInPicture = fullScreen;
  }

  generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}
