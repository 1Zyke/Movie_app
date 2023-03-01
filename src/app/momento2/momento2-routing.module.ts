import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Momento2Page } from './momento2.page';

const routes: Routes = [
  {
    path: '',
    component: Momento2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Momento2PageRoutingModule {}
