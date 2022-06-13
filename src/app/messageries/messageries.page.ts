import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DetailMessagePage } from './detail-message/detail-message.page';

@Component({
  selector: 'app-messageries',
  templateUrl: './messageries.page.html',
  styleUrls: ['./messageries.page.scss'],
})
export class MessageriesPage implements OnInit {

  //desactive button back
  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
    private platform: Platform,
    public modalController: ModalController

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
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailMessagePage,
      cssClass: 'my-custom-class',
      /*componentProps:{
        idEntreprise:this.idEntreprise
      }*/
    });
    return await modal.present();
  }

}
