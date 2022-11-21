import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Comunidade2PageRoutingModule } from './comunidade2-routing.module';

import { Comunidade2Page } from './comunidade2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Comunidade2PageRoutingModule
  ],
  declarations: [Comunidade2Page]
})
export class Comunidade2PageModule {}
