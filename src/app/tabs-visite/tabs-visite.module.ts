import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsVisitePageRoutingModule } from './tabs-visite-routing.module';
import { TabsVisitePage } from './tabs-visite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsVisitePageRoutingModule
  ],
  declarations: [TabsVisitePage]
})
export class TabsVisitePageModule {}
