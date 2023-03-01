import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Momento2PageRoutingModule } from './momento2-routing.module';

import { Momento2Page } from './momento2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Momento2PageRoutingModule
  ],
  declarations: [Momento2Page]
})
export class Momento2PageModule {}
