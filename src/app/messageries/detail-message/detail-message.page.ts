import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { ClientService } from 'src/app/shared/services/client.service';
import { NotificationService } from '../../shared/services/notification.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QrcodePromotionPage } from 'src/app/qrcode-promotion/qrcode-promotion.page';




@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.page.html',
  styleUrls: ['./detail-message.page.scss'],
})
export class DetailMessagePage implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();
  idClient;
  idEntreprise;
  entreprise:any;
  message:any;

  constructor(
    private platform: Platform,
    public modalController: ModalController,
    private entrepriseService: EntrepriseService,
    private clientService:ClientService,
    private notificationService:NotificationService,
    public dialog: MatDialog,
  ) {
    this.subscriptions.add(
      this.platform.backButton.subscribeWithPriority(9999, (processNextHandler)=>{
        if(this.isCurrentView){
          this.displayWarning=true;
        }else{
          processNextHandler();
        }
      })
    )
  }

  ngOnInit() {

    //console.log("Client", this.idClient);
    //console.log("Entreprise", this.idEntreprise);
    this.getEntreprise();
    this.listMessage();
  }

  getEntreprise(){
    this.entrepriseService.getEntrepriseById(this.idEntreprise).subscribe((res:any)=>{
       try {
             this.entreprise = res.message;
       } catch (error) {
         console.log("Erreur", error);
       }
    })
  }

  listMessage(){
    this.clientService.detailMessage(this.idClient,this.idEntreprise).subscribe((res:any)=>{
      try {
        console.log("Messages", res);
        this.message = res.message.reverse();
        this.notificationService.updateMessageClickEvent();

      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log("Suis la");
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }


  openQrcode(idPromotion){

    const dialogRef = this.dialog.open(QrcodePromotionPage, {
      width: '250px',
      height:'250px',
      data:{id:idPromotion}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });

  }

}
