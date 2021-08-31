import { Component, ElementRef, Input, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';

import { IItem } from '../../../../shared/models/item';

@Component({
  selector: 'tv-carousel-items',
  templateUrl: './carousel-items.component.html',
  styleUrls: ['./carousel-items.component.scss']
})
export class CarouselItemsComponent implements OnChanges {
  @ViewChild('containerList') containerList!: ElementRef;
  @ViewChild('itemsList') itemsList!: ElementRef;

  @Input() id: string | undefined;
  @Input() title: string | undefined;
  @Input() items!: IItem[];

  showControls: any = {
    left: false,
    right: true,
  }

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnChanges(simples: any) {
    this.hasArrowRight();
  }

  safeLink(link: string): SafeUrl {
    return this._sanitizer.bypassSecurityTrustUrl(`${link}`);
  }

  mountRouterLink(slug: string, type: string): string {
    if(type == "movie") {
      return `/on-demand/movie/${slug}`;
    } else {
      return `/on-demand/serie/${slug}`;
    }
  }

  scrollLeft(): void {
    this.showControls.right = true;
    this.containerList.nativeElement.scrollLeft -= (this.itemsList.nativeElement.getBoundingClientRect().width);

    setTimeout(() => {
      if(this.containerList.nativeElement.scrollLeft <= (this.itemsList.nativeElement.getBoundingClientRect().width)) {
        this.showControls.left = false;
      }
    }, 300);
  }

  scrollRight(): void {
    this.showControls.left = true;
    this.containerList.nativeElement.scrollLeft += (this.itemsList.nativeElement.getBoundingClientRect().width);
    this.hasArrowRight();
  }

  hasArrowRight(): void {
    setTimeout(() => {
      if(this.containerList && this.itemsList) {
        const maxScrollLeft = (this.containerList.nativeElement.scrollWidth - this.containerList.nativeElement.clientWidth);
        if(maxScrollLeft <= 0 || maxScrollLeft <= this.containerList.nativeElement.scrollLeft + 250) {
          this.showControls.right = false;
        }
      }
    }, 300)
  }
}
