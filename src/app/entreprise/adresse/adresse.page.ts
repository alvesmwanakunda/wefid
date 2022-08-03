import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';


@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.page.html',
  styleUrls: ['./adresse.page.scss'],
})
export class AdressePage implements OnInit {

  entreprise:any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private entrepriseService: EntrepriseService
  ) { 

  }

  ngOnInit() {
    this.getEntreprise();
  }

  getEntreprise(){
    this.entrepriseService.getEntrepriseById(this.data.id).subscribe((res:any)=>{
       try {
             this.entreprise = res.message;
       } catch (error) {
         console.log("Erreur", error);
       }
    })
  }

}
