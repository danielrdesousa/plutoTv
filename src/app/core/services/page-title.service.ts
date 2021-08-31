import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  constructor(private _titleService: Title) { }

  setPageTitle(pageTitle: string = "Start watching 250+ live channels", prefix: string = "Pluto TV -", suffix: boolean = false, suffixText: string = "on Pluto TV") {
    if(suffix) pageTitle = `${pageTitle} ${suffixText}`;

    this._titleService.setTitle(`${prefix} ${pageTitle}`);
  }

}
