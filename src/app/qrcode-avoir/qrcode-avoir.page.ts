import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QrcodeService } from '../shared/services/qrcode.service';
import { EntrepriseService } from '../shared/services/entreprise.service';

@Component({
  selector: 'app-qrcode-avoir',
  templateUrl: './qrcode-avoir.page.html',
  styleUrls: ['./qrcode-avoir.page.scss'],
})
export class QrcodeAvoirPage implements OnInit {

  qrCode:any;
  encaisse:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private qrcodeService: QrcodeService,
    private entrepriseService: EntrepriseService
  ) { }

  ngOnInit() {
    console.log("IdCadeau", this.data);
    this.getQrcodeAvoir();
    this.getEncaisse();
  }

  getQrcodeAvoir(){
    this.qrcodeService.getQrCodeAvoir(this.data.id).subscribe((res:any)=>{
      try {
            this.qrCode = res.qrCode;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  getEncaisse(){
    this.entrepriseService.getEncaisseGAvoir(this.data.id).subscribe((res:any)=>{
      try {
           this.encaisse = res.message;
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

}
