import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Subscription } from 'rxjs';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { Socket } from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription()
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  private socket: Socket;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private localNotifications: LocalNotifications,
    private fcm: FCM,
    private router:Router,
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
      const authToken = localStorage.getItem('accessToken');
      if(authToken){
           this.router.navigate(['tabs/dashboard'])
      }else{
        this.router.navigate(['/login']);
      }

      //this.socket = io(http://localhost:5000')
  } 

  ngOnInit(): void {
    this.routerOutlet.swipeGesture=false;
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
    this.routerOutlet.swipeGesture =false;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
    this.routerOutlet.swipeGesture =true;
  }

 
}
