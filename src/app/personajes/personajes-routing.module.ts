import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajesPage } from './personajes.page';
import { NeonPage } from '../neon/neon.page';
import { MorpPage } from '../morp/morp.page';
import { SmithPage } from '../smith/smith.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesPage
  },
  {
    path: '',
    component: NeonPage
  },
  {
    path: '',
    component: MorpPage
  },
  {
    path: '',
    component: SmithPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesPageRoutingModule {}
