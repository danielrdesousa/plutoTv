import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnDemandComponent } from './on-demand.component';
import { PageDetailsComponent } from './pages/page-details/page-details.component';
import { PageOnDemandComponent } from './pages/page-on-demand/page-on-demand.component';

const routes: Routes = [
  {
    path: '',
    component: OnDemandComponent,
    children: [
      {
        path: '',
        component: PageOnDemandComponent
      },
      {
        path: 'movie/:slug',
        component: PageDetailsComponent,
      },
      {
        path: 'serie/:slug',
        component: PageDetailsComponent,
      },
      {
        path: 'serie/:slug/details/season/:season',
        component: PageDetailsComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnDemandRoutingModule { }
