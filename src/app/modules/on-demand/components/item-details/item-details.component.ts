import { RatingDescriptorsService } from './../../../../core/services/rating-descriptos.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { IItem } from './../../../../shared/models/item';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'tv-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  slug!: string;
  @Input() item!: IItem;

  constructor(private _ratingDescriptorsService: RatingDescriptorsService) { }

  ngOnInit() { }

  handlerDuration(duration: number = 0) {
    duration = duration / 1000;

    var h = Math.floor(duration / 3600);
    var m = Math.floor(duration % 3600 / 60);
    var s = Math.floor(duration % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";
    return hDisplay + mDisplay;
  }

  getDisplayNameRating(ratingDescriptor: string = ''): string {
    return this._ratingDescriptorsService.getDisplayName(ratingDescriptor);
  }

  getRatingIcon(rating: any): string {
    if(rating == null) return '';

    return this._ratingDescriptorsService.getRatingIcon(rating);
  }

  handlerFeaturedImage(path: any): string {
    if(path == null) return '';

    const fixWidth = "fill=blur&fit=fill&fm=jpg&h=280&q=70&w=1678";

    return `${path.split("?")[0]}?${fixWidth}`;
  }
}
