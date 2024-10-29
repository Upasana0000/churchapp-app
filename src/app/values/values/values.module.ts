import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuesPageRoutingModule } from './values-routing.module';

import { ValuesPage } from './values.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuesPageRoutingModule
  ],
  declarations: [ValuesPage]
})
export class ValuesPageModule {}
