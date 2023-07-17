import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtService } from './shared/interceptors/jwt.service';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx'
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
registerLocaleData(localFr, 'fr');
const config: SocketIoConfig={url:environment.BASE_API_URL, options:{}};
import { FCM } from '@ionic-native/fcm/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(), 
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass:JwtService, multi:true},
    {provide:LOCALE_ID, useValue:"fr-FR"},
    //FirebaseX,
    FCM
    //HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
