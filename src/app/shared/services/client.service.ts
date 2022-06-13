import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {}

  addClient(client:Object){
    return this.http.post(`${environment.BASE_API_URL}/client`, client)
  }

  getUser(){
    return this.http.get(`${environment.BASE_API_URL}/user/client`)
  }

  updateUser(user){
    return this.http.put(`${environment.BASE_API_URL}/user`,user)
  }

  updatePassword(body){
    return this.http.post(`${environment.BASE_API_URL}/profil/password`,body)
  }
  
}
