import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { FCM } from '@ionic-native/fcm/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription()


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications: LocalNotifications,
    private fcm: FCM
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

  ngOnInit(): void {
  }

  simpleNotif(){
    this.localNotifications.schedule({
      id:1,
      title:"Wefid Notification",
      text:"Vous avez un nouveau message",
      icon:'https://web-restaurant.vercel.app/assets/images/logo.png'
    })
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.fcm.getToken().then(token=>{
        console.log(token);
      })
      this.fcm.onNotification().subscribe(data=>{
        console.log(data);
        if(data.wasTapped){
          console.log('Received in background');
        }else{
          console.log('Received in foreground');
        }
      });
      this.fcm.onTokenRefresh().subscribe(token=>{
        console.log(token);
      })
    });
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }
}
