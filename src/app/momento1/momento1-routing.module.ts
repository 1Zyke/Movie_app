import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Momento1Page } from './momento1.page';

const routes: Routes = [
  {
    path: '',
    component: Momento1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Momento1PageRoutingModule {}
