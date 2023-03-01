import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorpPageRoutingModule } from './morp-routing.module';

import { MorpPage } from './morp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorpPageRoutingModule
  ],
  declarations: [MorpPage]
})
export class MorpPageModule {}
