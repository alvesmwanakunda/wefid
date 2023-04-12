import { Component, OnInit } from '@angular/core';
import { QrcodeUserPage } from '../qrcode-user/qrcode-user.page';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Platform } from '@ionic/angular';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { ClientService } from '../shared/services/client.service';
import { NotificationService } from '../shared/services/notification.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  client:any;
  clickMessageEvent: Subscription;

  constructor(
    public dialog: MatDialog,
    public platform: Platform,
    private keyboard: Keyboard,
    private clientService: ClientService,
    private notificationService:NotificationService,
  ) {
     this.clickMessageEvent = this.notificationService.getLengthMessageEvent().subscribe(()=>{
      this.getClient();
     })
  }

  ngOnInit() {

    this.getClient();
    this.notificationService.getMessageAppVisite().subscribe((res:any)=>{
      console.log("Socket Data", res);
      if(res){
        this.getClient();
      }

   });
  }

  getClient(){

    this.clientService.getUser().subscribe((res:any)=>{
      try {
           //console.log("Client", res);
           this.getMessageClient(res.message._id);
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  getMessageClient(idClient){
    this.clientService.getMessageIsFalse(idClient).subscribe((res:any)=>{
      try {
            console.log("Nombre", res);
            this.client = res.depense;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QrcodeUserPage, {
      width: '250px',
      height:'250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  fabButtonClass(){
    //console.log("Keyboard ", this.keyboard.isVisible);
    return this.platform.is('android') && this.keyboard.isVisible ? 'android-fab-button':'';
  }

}
