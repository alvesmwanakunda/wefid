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
  
}
