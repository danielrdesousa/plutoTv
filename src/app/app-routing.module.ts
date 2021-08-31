import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { OnDemandComponent } from './modules/on-demand/on-demand.component';
import { LiveTvComponent } from './modules/live-tv/live-tv.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'on-demand',
        component: OnDemandComponent,
        loadChildren: () => import('./modules/on-demand/on-demand.module').then(m => m.OnDemandModule),
      },
      {
        path: 'live-tv',
        component: LiveTvComponent,
        loadChildren: () => import('./modules/live-tv/live-tv.module').then(m => m.LiveTvModule),
      },
      {
        path: '',
        redirectTo: 'on-demand',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
