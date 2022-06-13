import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private http:HttpClient) { }

   getAllEntreprise(){
    return this.http.get(`${environment.BASE_API_URL}/entreprises`)
   }

   getAllEntrepriseVisiter(){
    return this.http.get(`${environment.BASE_API_URL}/entreprises/visiter`)
   }

   getEntrepriseByIdVisiter(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/visiter/entreprise/id/${idEntreprise}`)
  }
   
   getOperationByClient(){
     return this.http.get(`${environment.BASE_API_URL}/operations/user`)
   }

   getEntrepriseById(idEntreprise){
     return this.http.get(`${environment.BASE_API_URL}/entreprise/id/${idEntreprise}`)
   }

   getLenghtCadeau(idEntreprise){
     return this.http.get(`${environment.BASE_API_URL}/cadeau/length/${idEntreprise}`)
   }

   getLenghtDepense(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/depense/length/${idEntreprise}`)
   }

   getLenghtEncaisse(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/operation/encaisse/length/${idEntreprise}`)
   }

   /*getLenghtEncaisse(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/encaisse/length/${idEntreprise}`)
   }*/

   listCadeauClient(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/cadeau/visite/${idEntreprise}`)
   }

   listCadeauByEntreprise(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/cadeau/${idEntreprise}`)
   }

   getCadeauById(idCadeau){
     return this.http.get(`${environment.BASE_API_URL}/cadeau/detail/mobile/${idCadeau}`)
   }

  getEncaisse(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/operation/encaisse/${idEntreprise}`)
  }

  getDepense(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/operation/depense/${idEntreprise}`)
  }

   ///cadeau/visite/

   //Avoirs

   getLenghtAvoirDepense(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/avoir/depense/length/${idEntreprise}`)
   }

   getLenghtAvoirEncaisse(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/avoir/encaisse/length/${idEntreprise}`)
   }

   getEncaisseAvoir(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/operation/avoir/encaisse/${idEntreprise}`)
  }

  getDepenseAvoir(idEntreprise){
    return this.http.get(`${environment.BASE_API_URL}/operation/avoir/depense/${idEntreprise}`)
  }

  getEncaisseGAvoir(id){
    return this.http.get(`${environment.BASE_API_URL}/get/avoir/encaisse/${id}`)
  }





}
