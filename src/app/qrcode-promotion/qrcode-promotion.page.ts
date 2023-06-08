import { Component, OnInit, Inject } from '@angular/core';
import { QrcodeService } from '../shared/services/qrcode.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-qrcode-promotion',
  templateUrl: './qrcode-promotion.page.html',
  styleUrls: ['./qrcode-promotion.page.scss'],
})
export class QrcodePromotionPage implements OnInit {

  qrCode:any;

  constructor(
    private qrcodeService:QrcodeService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.getQrcodePromotion();
  }

  getQrcodePromotion(){
    this.qrcodeService.getQrPromotion(this.data.id).subscribe((res:any)=>{
      console.log("Qrcoe",res);
      try {
            this.qrCode = res.qrCode;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

}
