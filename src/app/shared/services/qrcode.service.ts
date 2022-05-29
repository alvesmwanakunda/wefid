import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  optionRequete = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    }),
  };

  constructor(private http:HttpClient) { }

  getQrCodeUser(){
    return this.http.get(`${environment.BASE_API_URL}/qrcode/user`)
  }

  getQrCodeCadeau(idCadeau){
    return this.http.get(`${environment.BASE_API_URL}/qrcode/cadeau/${idCadeau}`)
  }

  getQrCodeAvoir(idEncaisse){
    return this.http.get(`${environment.BASE_API_URL}/qrcode/avoir/${idEncaisse}`)
  }


}
