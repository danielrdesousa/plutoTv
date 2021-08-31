import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { ICategory } from '../../../../shared/models/category';

@Component({
  selector: 'tv-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnChanges {
  @Input() categories: ICategory[] = [];

  selectedId: string = '';

  constructor() { }

  ngOnChanges(changes: any) {
    if(this.categories.length > 0) this.selectedId = this.categories[0]?.id;
  }

  goTo(category: ICategory) {
    const movieRow = document.getElementById((category.id).toString());
    this.activeItemMenu(category.id);

    if(!movieRow) return;

    movieRow.scrollIntoView({
      behavior: 'smooth', block: 'start'
    });
  }

  activeItemMenu(categoryId: string): void {
    this.selectedId = categoryId;
  }
}
