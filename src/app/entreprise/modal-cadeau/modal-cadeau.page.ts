import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { DetailCadeauPage } from '../detail-cadeau/detail-cadeau.page';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';




@Component({
  selector: 'app-modal-cadeau',
  templateUrl: './modal-cadeau.page.html',
  styleUrls: ['./modal-cadeau.page.scss'],
})
export class ModalCadeauPage implements OnInit {

  idEntreprise;
  cadeaux:any;

  constructor(
    public modalController: ModalController,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog,
    ) { }

  ngOnInit() {

    console.log("Entreprise", this.idEntreprise);
    this.getAllCadeau();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log("Suis la");
    this.modalController.dismiss({
      'dismissed': true
    });
  }
 
  getAllCadeau(){
    this.entrepriseService.listCadeauByEntreprise(this.idEntreprise).subscribe((res:any)=>{
      try {
           //console.log("cadeaux",res);
           this.cadeaux = res.message;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  openDialogCadeau(idCadeau): void {
    const dialogRef = this.dialog.open(DetailCadeauPage, {
      width: '350px',
      data:{id:idCadeau}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
