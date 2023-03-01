import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmithPage } from './smith.page';

const routes: Routes = [
  {
    path: '',
    component: SmithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmithPageRoutingModule {}
