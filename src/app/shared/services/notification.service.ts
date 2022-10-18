import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private socket = io(environment.BASE_API_URL);

  notificationSubject: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }


  getMessageVisite(){
    this.socket.on('get_visite', (data)=>{
      this.notificationSubject.next(data);
    });
    return this.notificationSubject.asObservable();
  }

  getMessageDepenseCadeaux(){

    this.socket.on('get_depense', (data)=>{
      this.notificationSubject.next(data);
    });
    return this.notificationSubject.asObservable();
  }

}

