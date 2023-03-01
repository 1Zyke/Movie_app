import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmithPageRoutingModule } from './smith-routing.module';

import { SmithPage } from './smith.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmithPageRoutingModule
  ],
  declarations: [SmithPage]
})
export class SmithPageModule {}
