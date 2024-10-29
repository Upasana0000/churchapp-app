import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesciplesPageRoutingModule } from './desciples-routing.module';

import { DesciplesPage } from './desciples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesciplesPageRoutingModule
  ],
  declarations: [DesciplesPage]
})
export class DesciplesPageModule {}
