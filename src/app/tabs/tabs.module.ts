import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { ClientService } from '../shared/services/client.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage],
  providers:[Keyboard,ClientService]
})
export class TabsPageModule {}
