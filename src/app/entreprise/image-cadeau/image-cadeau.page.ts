import { Component, OnInit, Inject } from '@angular/core';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-image-cadeau',
  templateUrl: './image-cadeau.page.html',
  styleUrls: ['./image-cadeau.page.scss'],
})
export class ImageCadeauPage implements OnInit {

  cadeau:any;

  constructor(
    private entrepriseService: EntrepriseService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.getCadeau();
  }

  ngOnInit() {
    this.getCadeau();
  }

  getCadeau(){
   
    this.entrepriseService.getCadeauById(this.data.id).subscribe((res:any)=>{
      try {
          this.cadeau = res.message;
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

}
