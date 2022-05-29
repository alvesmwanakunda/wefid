import { Component, OnInit } from '@angular/core';
import { QrcodeService } from '../shared/services/qrcode.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-qrcode-user',
  templateUrl: './qrcode-user.page.html',
  styleUrls: ['./qrcode-user.page.scss'],
})
export class QrcodeUserPage implements OnInit {

  qrCode:any;

  constructor(
    private qrcodeService:QrcodeService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getQrcode();
  }

  getQrcode(){

     this.qrcodeService.getQrCodeUser().subscribe((res:any)=>{
       try {
            
             //this.qrCode = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${res.qrCode}`);
             this.qrCode = res.qrCode;
             //console.log("res",this.qrCode);
       } catch (error) {
         console.log("Error", error)
       }
     })
  }

}
