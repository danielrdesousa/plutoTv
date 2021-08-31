import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LiveTvComponent } from './live-tv.component';

const routes: Routes = [
  {
    path: '',
    component: LiveTvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LiveTvRoutingModule { }
