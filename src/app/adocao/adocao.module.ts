import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdocaoPageRoutingModule } from './adocao-routing.module';

import { AdocaoPage } from './adocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdocaoPageRoutingModule
  ],
  declarations: [AdocaoPage]
})
export class AdocaoPageModule {}
