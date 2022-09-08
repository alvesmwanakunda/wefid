import { Component, OnInit, Inject } from '@angular/core';
import { EntrepriseService } from '../shared/services/entreprise.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-open-encaisse',
  templateUrl: './open-encaisse.page.html',
  styleUrls: ['./open-encaisse.page.scss'],
})
export class OpenEncaissePage implements OnInit {

  operation:any;

  constructor(
    private entrepriseService: EntrepriseService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.getOperationUser();
  }

  getOperationUser(){
    this.entrepriseService.getOperationByUser(this.data.id).subscribe((res:any)=>{
      try {
           //console.log("Response", res);
           this.operation = res.message
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

}
