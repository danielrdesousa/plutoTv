import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tv-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent implements OnInit, OnChanges {
  @Input() stopSplashScreen: boolean = false;
  @Output() closeSplashScreen: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.animationBars();
  }

  ngOnChanges() {
    if(this.stopSplashScreen) this.stopAnimation();
  }

  animationBars() {
    const bars = document.querySelectorAll(".bars__progress");

    setInterval(function run() {
      bars.forEach(function(el) {
        el.classList.toggle("animation");
      });

      setTimeout(() => {
        bars.forEach(function(el) {
          el.classList.toggle("animation");
        });
       }, 1900);

      return run;
    }(), 1950);
  }

  stopAnimation() {
    document.querySelectorAll(".bars__progress").forEach(function(el) {
      el.classList.remove("animation");
    });
    this.stopAllSetInterval();
    document.querySelectorAll(".splash-container__animation, .circle__progress, .animation__logo").forEach(function(el) {
      el.classList.add("animation");
    });
    setTimeout(() => this.closeSplashScreen.emit(true), 1500);
  }

  stopAllSetInterval() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0 ; i < highestTimeoutId ; i++) {
      clearTimeout(i);
    }
  }
}
