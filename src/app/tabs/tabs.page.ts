import { Component, OnInit } from '@angular/core';
import { QrcodeUserPage } from '../qrcode-user/qrcode-user.page';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Platform } from '@ionic/angular';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  client:any;

  constructor(
    public dialog: MatDialog,
    public platform: Platform,
    private keyboard: Keyboard,
    private clientService: ClientService,
  ) { }

  ngOnInit() {

    this.getClient();
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
