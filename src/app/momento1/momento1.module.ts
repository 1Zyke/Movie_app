import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Momento1PageRoutingModule } from './momento1-routing.module';

import { Momento1Page } from './momento1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Momento1PageRoutingModule
  ],
  declarations: [Momento1Page]
})
export class Momento1PageModule {}
