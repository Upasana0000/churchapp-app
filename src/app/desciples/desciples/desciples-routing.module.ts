import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesciplesPage } from './desciples.page';

const routes: Routes = [
  {
    path: '',
    component: DesciplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesciplesPageRoutingModule {}
