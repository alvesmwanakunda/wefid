import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { EntrepriseService } from '../../shared/services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QrcodeAvoirPage } from 'src/app/qrcode-avoir/qrcode-avoir.page';


@Component({
  selector: 'app-avoirs',
  templateUrl: './avoirs.page.html',
  styleUrls: ['./avoirs.page.scss'],
})
export class AvoirsPage implements OnInit {

  idEntreprise:any;
  mode: ProgressSpinnerMode = 'determinate';
  encaisse:any;
  depense:any;
  encaisses:any;
  depenses:any;


  constructor(
    private entrepriseService: EntrepriseService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,

  ) { 
    this.idEntreprise = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log("id", this.idEntreprise);
    this.lenghtDepense();
    this.lenghtEncaisse();
    this.listDepense();
    this.listEncaisse();
  }

  lenghtEncaisse(){
    this.entrepriseService.getLenghtAvoirEncaisse(this.idEntreprise).subscribe((res:any)=>{
      try {
           this.encaisse = res.encaisse;
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

  lenghtDepense(){
    this.entrepriseService.getLenghtAvoirDepense(this.idEntreprise).subscribe((res:any)=>{
      try {
           this.depense = res.depense;
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

  listEncaisse(){
    this.entrepriseService.getEncaisseAvoir(this.idEntreprise).subscribe((res:any)=>{
      try {
            this.encaisses = res.message;
            console.log("Encaisse", this.encaisses);
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

  listDepense(){
    this.entrepriseService.getDepenseAvoir(this.idEntreprise).subscribe((res:any)=>{
      try {
          this.depenses = res.message;
      } catch (error) {
        console.log("Erreur", error)
      }
    })
  }

  detailClient(){
    this.router.navigate(["tabs/entreprise",this.idEntreprise]);
  }

  openDialog(idEncaisse): void {
    const dialogRef = this.dialog.open(QrcodeAvoirPage, {
      width: '250px',
      height:'270px',
      data:{id:idEncaisse,idEntreprise:this.idEntreprise}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }



}
