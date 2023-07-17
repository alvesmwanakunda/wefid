import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import  { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //private socket = io(environment.BASE_API_URL);

  notificationSubject: BehaviorSubject<string> = new BehaviorSubject('');
  private subject = new Subject<any>();

  constructor(private socket: Socket) { }

  public initSocket():void{
    this.socket.connect();
  }

  getMessageVisite(){
    this.socket.emit('get_visite',(data)=>{
      console.log('Message reçu du serveur:', data);
      this.notificationSubject.next(data);
    });
    return this.notificationSubject.asObservable();
  }
  

  getMessageDepenseCadeaux(){

    this.socket.emit('get_depense', (data)=>{
      this.notificationSubject.next(data);
    });
    return this.notificationSubject.asObservable();
  }

  getMessageAppVisite(){
    this.socket.emit('message_visite', (data)=>{
      this.notificationSubject.next(data);
      console.log("Visite");
    });
    return this.notificationSubject.asObservable();
  }

  public onMessageVisite(): any{
    return this.socket.fromEvent('get_visite')
  }
  public onMessageDepense(): any{
    return this.socket.fromEvent('get_depense')
  }
  public onMessageAppVisite(): any{
    return this.socket.fromEvent('message_visite')
  }

  updateMessageClickEvent(){
    this.subject.next();
  }

  getLengthMessageEvent(){
    return this.subject.asObservable();
  }

}

