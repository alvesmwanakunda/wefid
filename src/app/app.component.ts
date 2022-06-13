import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription()


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
   
  ) {
      this.initializeApp(); 
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

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    })
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }
}
