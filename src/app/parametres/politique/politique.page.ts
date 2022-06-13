import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPolitiquePage } from './modal-politique/modal-politique.page';
import { ModelLegalPage } from './model-legal/model-legal.page';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-politique',
  templateUrl: './politique.page.html',
  styleUrls: ['./politique.page.scss'],
})
export class PolitiquePage implements OnInit {
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
      component: ModelLegalPage,
      cssClass: 'my-custom-class',
      /*componentProps:{
        idEntreprise:this.idEntreprise
      }*/
    });
    return await modal.present();
  }

  async presentModalP() {
    const modal = await this.modalController.create({
      component: ModalPolitiquePage,
      cssClass: 'my-custom-class',
      /*componentProps:{
        idEntreprise:this.idEntreprise
      }*/
    });
    return await modal.present();
  }

}
