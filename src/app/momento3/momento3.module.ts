import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Momento3PageRoutingModule } from './momento3-routing.module';

import { Momento3Page } from './momento3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Momento3PageRoutingModule
  ],
  declarations: [Momento3Page]
})
export class Momento3PageModule {}
