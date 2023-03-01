import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeonPageRoutingModule } from './neon-routing.module';

import { NeonPage } from './neon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeonPageRoutingModule
  ],
  declarations: [NeonPage]
})
export class NeonPageModule {}
