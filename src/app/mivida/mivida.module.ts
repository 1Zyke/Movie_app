import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MividaPageRoutingModule } from './mivida-routing.module';

import { MividaPage } from './mivida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MividaPageRoutingModule
  ],
  declarations: [MividaPage]
})
export class MividaPageModule {}
