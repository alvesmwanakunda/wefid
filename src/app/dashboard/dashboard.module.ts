import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { EntrepriseService } from '../shared/services/entreprise.service';
import { ClientService } from '../shared/services/client.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { QRCodeModule } from 'angularx-qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    SharedModule,
    QRCodeModule
  ],
  declarations: [DashboardPage],
  providers:[EntrepriseService,ClientService,QRScanner,BarcodeScanner]
})
export class DashboardPageModule {}
