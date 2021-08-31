import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tv-open-guide',
  templateUrl: './open-guide.component.html',
  styleUrls: ['./open-guide.component.scss']
})
export class OpenGuideComponent {
  @Output() openGuide: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  emitEventOpenGuide() {
    this.openGuide.emit(true);
  }

}
