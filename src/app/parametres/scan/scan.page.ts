import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
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

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

}
