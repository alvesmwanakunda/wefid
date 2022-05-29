import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QrcodeService } from '../shared/services/qrcode.service';


@Component({
  selector: 'app-qrcode-cadeau',
  templateUrl: './qrcode-cadeau.page.html',
  styleUrls: ['./qrcode-cadeau.page.scss'],
})
export class QrcodeCadeauPage implements OnInit {

  qrCode:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private qrcodeService: QrcodeService
    ) { }

  ngOnInit() {

    console.log("IdCadeau", this.data.id);
    this.getQrcodeCadeau();
  }

  getQrcodeCadeau(){
    this.qrcodeService.getQrCodeCadeau(this.data.id).subscribe((res:any)=>{
      try {
            this.qrCode = res.qrCode;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }


}
