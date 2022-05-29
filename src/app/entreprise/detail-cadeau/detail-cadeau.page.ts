import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@Component({
  selector: 'app-detail-cadeau',
  templateUrl: './detail-cadeau.page.html',
  styleUrls: ['./detail-cadeau.page.scss'],
})
export class DetailCadeauPage implements OnInit {

  cadeau:any;

  constructor(
    private entrepriseService: EntrepriseService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    this.getCadeau();
  }


  getCadeau(){
    this.entrepriseService.getCadeauById(this.data.id).subscribe((res:any)=>{
      try {
          this.cadeau = res.message;
          //console.log("cadeau", res);
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

}
