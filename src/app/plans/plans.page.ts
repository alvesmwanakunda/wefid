import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailPlanPage } from './detail-plan/detail-plan.page';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
    public modalController:ModalController,
    private platform: Platform,
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailPlanPage,
      cssClass: 'my-custom-class',
      /*componentProps:{
        idEntreprise:this.idEntreprise
      }*/
    });
    return await modal.present();
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
     
      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }

}
