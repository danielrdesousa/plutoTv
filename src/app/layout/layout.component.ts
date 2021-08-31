import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  stopAnimationSplashScreen: boolean = false;
  showPageContent: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.stopAnimationSplashScreen = true, 1900);
  }

  showContentAfterSplashScreen(showContent: boolean): void {
    this.showPageContent = showContent;
  }
}
