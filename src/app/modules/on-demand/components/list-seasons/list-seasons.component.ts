import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tv-list-seasons',
  templateUrl: './list-seasons.component.html',
  styleUrls: ['./list-seasons.component.scss']
})
export class ListSeasonsComponent implements OnInit {

  seasons = [
    1,
    2,
    3,
    4,
    5,
    6
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    const currentURL = this.router.routerState.snapshot.url;
    if(!currentURL.match(/season/)) {
      this.router.navigateByUrl(`${currentURL}/details/season/1`);
    }
  }

  navigateTo(event: any) {
    const season = event.target.value;
    this.redirectToSeason(season);
  }

  redirectToSeason(season: string): void {
    let currentURL: string[] = (this.router.routerState.snapshot.url).split("/");
    // remove number season
    currentURL.pop();
    // added new season
    currentURL.push(season);

    this.router.navigateByUrl(currentURL.join("/"));
  }
}
