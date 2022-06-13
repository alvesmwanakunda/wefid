import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { ActivatedRoute } from '@angular/router';
import { ModalVisitePage } from '../modal-visite/modal-visite.page';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-visite-entreprise',
  templateUrl: './visite-entreprise.page.html',
  styleUrls: ['./visite-entreprise.page.scss'],
})
export class VisiteEntreprisePage implements OnInit {

  idEntreprise:any;
  entreprise:any;
  isReadMore = true;

  constructor(
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog
  ) {
    this.idEntreprise = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {

    this.getEntreprise(this.idEntreprise);
  }

  getEntreprise(idEntreprise){
    this.entrepriseService.getEntrepriseByIdVisiter(idEntreprise).subscribe((res:any)=>{
       try {
             this.entreprise = res.message;
       } catch (error) {
         console.log("Erreur", error);
       }
    })
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

  showText(){
    this.isReadMore = !this.isReadMore
  }


}
