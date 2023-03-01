import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Momento3Page } from './momento3.page';

const routes: Routes = [
  {
    path: '',
    component: Momento3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Momento3PageRoutingModule {}
