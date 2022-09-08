import { Component, OnInit, Inject } from '@angular/core';
import { EntrepriseService } from '../shared/services/entreprise.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-open-depense',
  templateUrl: './open-depense.page.html',
  styleUrls: ['./open-depense.page.scss'],
})
export class OpenDepensePage implements OnInit {

  visite:any;
  achat:any;

  constructor(
    private entrepriseService: EntrepriseService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {

    this.getAchat();
    this.getVisite();
  }

  getVisite(){
    this.entrepriseService.getLenghtDepenseVisite(this.data.id).subscribe((res:any)=>{
      try {
            //console.log("Visite", res);
            this.visite = res.depense[0];
      } catch (error) {
        console.log("Erreur ", error);
      }
    })
  }

  getAchat(){
    this.entrepriseService.getLenghtDepenseAchat(this.data.id).subscribe((res:any)=>{
      try {
            //console.log("Achat", res);
            this.achat = res.depense[0];
      } catch (error) {
        console.log("Erreur ", error);
      }
    })
  }

}
