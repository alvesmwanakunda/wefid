import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.page.html',
  styleUrls: ['./detail-message.page.scss'],
})
export class DetailMessagePage implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
    private platform: Platform,
    public modalController: ModalController,
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

}
