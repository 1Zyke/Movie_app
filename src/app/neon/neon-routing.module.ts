import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeonPage } from './neon.page';

const routes: Routes = [
  {
    path: '',
    component: NeonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeonPageRoutingModule {}
