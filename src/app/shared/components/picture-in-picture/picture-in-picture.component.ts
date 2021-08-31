import { Component, Output, ViewEncapsulation, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tv-picture-in-picture',
  templateUrl: './picture-in-picture.component.html',
  styleUrls: ['./picture-in-picture.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PictureInPictureComponent {
  @Input() showPictureInPicture: boolean = false;
  @Output() exitPictureInPicture: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  emitEventExpandVideo(): void {
    this.exitPictureInPicture.emit(true);
  }

}
