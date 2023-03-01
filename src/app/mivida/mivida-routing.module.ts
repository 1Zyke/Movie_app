import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MividaPage } from './mivida.page';

const routes: Routes = [
  {
    path: '',
    component: MividaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MividaPageRoutingModule {}
