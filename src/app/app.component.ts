import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
//import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';
//import { FCM} from '@ionic-native/fcm/ngx'

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
    //private firebaseX: FirebaseX,
    //private fcm: FCM
   
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
   
    /*this.firebaseX.getToken()
    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error));

    this.firebaseX.onMessageReceived()
      .subscribe(data => console.log(`User opened a notification ${data}`));

    this.firebaseX.onTokenRefresh()
      .subscribe((token: string) => console.log(`Got a new token ${token}`));*/
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //this.notificationPush();
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  /*notificationPush(){

     //subcribe to a topic
      //this.fcm.subscribeToTopic('Deals');
      //get FCM token

      this.fcm.getToken().then(token => {
        console.log(token);
      });
      
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      });
      
      this.fcm.onTokenRefresh().subscribe(token => {
        console.log(token);
      });

  }*/
}
