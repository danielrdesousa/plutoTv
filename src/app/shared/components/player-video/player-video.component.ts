import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tv-player-video',
  templateUrl: './player-video.component.html',
  styleUrls: ['./player-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerVideoComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

}
