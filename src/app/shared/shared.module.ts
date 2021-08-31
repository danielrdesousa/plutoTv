import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyImgDirective } from './directives/lazy-img/lazy-img.directive';

import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { PlayerVideoComponent } from './components/player-video/player-video.component';
import { PictureInPictureComponent } from './components/picture-in-picture/picture-in-picture.component';

@NgModule({
  declarations: [
    SplashScreenComponent,
    PlayerVideoComponent,
    PictureInPictureComponent,
    LazyImgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SplashScreenComponent,
    PlayerVideoComponent,
    PictureInPictureComponent,
    LazyImgDirective
  ]
})
export class SharedModule { }
