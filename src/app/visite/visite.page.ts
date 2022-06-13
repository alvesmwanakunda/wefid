import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../shared/services/entreprise.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalVisitePage } from './modal-visite/modal-visite.page';
import { Router} from "@angular/router";




@Component({
  selector: 'app-visite',
  templateUrl: './visite.page.html',
  styleUrls: ['./visite.page.scss'],
})
export class VisitePage implements OnInit {

  slideOpts={
    initialSlide:0,
    speed:800,
    autoplay:true
  };
  slideOpt={
    initialSlide:0,
  };
  entreprises:any=[];
  isEntreprise=false;
  status:any="All";

  constructor(
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit() {

    this.getEntreprise();
  }

  getEntreprise(){
    this.isEntreprise=true;
    this.entrepriseService.getAllEntrepriseVisiter().subscribe((res:any)=>{
      try {
         //console.log("Entreprises", res);
          this.entreprises = res.message;
      } catch (error) {
        console.log("Erreur", error);
      }

    })
  }

  detailEntreprise(idEntreprise){

    this.router.navigate(["tabs-visite/visite-entreprise",idEntreprise]);

  }

  
  filterClick(categorie:String){
    console.log("Categorie", categorie);
    //this.isEntreprise=false;

     if(categorie!="All"){ 
       this.status =categorie;
       this.entrepriseService.getAllEntrepriseVisiter()
          .subscribe((res:any) => this.entreprises = res.message.filter(product=>product.categorie==categorie));
     }else{
       this.status = "All";
       this.entrepriseService.getAllEntrepriseVisiter()
          .subscribe((res:any) => this.entreprises = res.message);
     }  
   }
 
   applyFilter(eveent:Event){
 
     const filterValue = (eveent.target as HTMLInputElement).value;
     console.log("Valeur", filterValue);
 
      this.entrepriseService.getAllEntrepriseVisiter()
         .subscribe((res:any) => this.entreprises = res.message.filter(product=>product.nom.toLowerCase().includes(filterValue)));
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalVisitePage, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }


}
