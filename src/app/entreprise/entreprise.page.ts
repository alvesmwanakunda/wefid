import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../shared/services/entreprise.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QrcodeCadeauPage } from '../qrcode-cadeau/qrcode-cadeau.page';
import { AdressePage } from './adresse/adresse.page';
import { ModalCadeauPage } from './modal-cadeau/modal-cadeau.page';
import { ModalController } from '@ionic/angular';
import { DetailCadeauPage } from './detail-cadeau/detail-cadeau.page';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { ImageCadeauPage } from './image-cadeau/image-cadeau.page';
import { OpenDepensePage } from '../open-depense/open-depense.page';
import { OpenEncaissePage } from '../open-encaisse/open-encaisse.page';
import { NotificationService } from '../shared/services/notification.service';



@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.page.html',
  styleUrls: ['./entreprise.page.scss'],
})
export class EntreprisePage implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  idEntreprise:any;
  entreprise:any;
  cadeau:any;
  isReadMore = true;
  depense:any;
  encaisse:any;
  depenses:any;
  encaisses:any;
  cadeaux:any;
  mode: ProgressSpinnerMode = 'determinate';
  modal:HTMLElement;
  code="6266bbbdfcd08dd0264fcb56,625eb67e945ca3c559bdae86";
  scanne:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entrepriseService: EntrepriseService,
    public dialog: MatDialog,
    public modalController: ModalController,
    private platform: Platform,
    private callNumber: CallNumber,
    private notificationService:NotificationService,
  ) { 
    this.idEntreprise = this.route.snapshot.paramMap.get('id');
    this.getEntreprise(this.route.snapshot.paramMap.get('id'));
    this.getLengthCadeau(this.route.snapshot.paramMap.get('id'));
    this.getLengthDepense(this.route.snapshot.paramMap.get('id'));
    this.getLengthEncaisse(this.route.snapshot.paramMap.get('id'));
    this.listCadeauClient(this.route.snapshot.paramMap.get('id'));
    this.listEncaisse(this.route.snapshot.paramMap.get('id'));
    this.listDepense(this.route.snapshot.paramMap.get('id'));
    this.subscriptions.add(
      this.platform.backButton.subscribeWithPriority(9999, (processNextHandler)=>{
        if(this.isCurrentView){
          this.displayWarning=true;
        }else{
          processNextHandler();
        }
      })
    );
  
  }

  ngOnInit() {
    this.notificationService.getMessageVisite().subscribe((res:any)=>{
       console.log("Socket Data", res);
       this.encaisse = res;
    });
    this.notificationService.getMessageDepenseCadeaux().subscribe((res:any)=>{
      console.log("Socket Depense", res);
      this.depense = parseInt(this.depense) + parseInt(res);
    })
    //this.scanne = this.code.split(/,/);
    //console.log("Scanner", this.scanne);
  }

  getEntreprise(idEntreprise){
    this.entrepriseService.getEntrepriseById(idEntreprise).subscribe((res:any)=>{
       try {
             this.entreprise = res.message;
       } catch (error) {
         console.log("Erreur", error);
       }
    })
  }

  getLengthCadeau(idEntreprise){

    this.entrepriseService.getLenghtCadeau(idEntreprise).subscribe((res:any)=>{
      try {
           this.cadeau = res.cadeau;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  getLengthDepense(idEntreprise){

    this.entrepriseService.getLenghtDepense(idEntreprise).subscribe((res:any)=>{
      try {
           console.log("Depense",res);
           
           if(res.depense[0]?.point){
            this.depense = res.depense[0].point;
           }else{
             this.depense =0;
           }

      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  getLengthEncaisse(idEntreprise){

    this.entrepriseService.getLenghtEncaisse(idEntreprise).subscribe((res:any)=>{
      try {
            console.log("Encaisse", res);
           
           if( res.encaisse[0]?.point){
            this.encaisse = res.encaisse[0].point;
           }
           else{
            this.encaisse = 0;
           }

      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  listCadeauClient(idEntreprise){
    this.entrepriseService.listCadeauClient(idEntreprise).subscribe((res:any)=>{
      try {
           this.cadeaux = res.cadeau;
           console.log("Cadeau",res.cadeau);
      } catch (error) {
        console.log("Error", error);
      }
    })
  }

  showText(){
    this.isReadMore = !this.isReadMore
  }

  openDialog(idCadeau): void {
    const dialogRef = this.dialog.open(QrcodeCadeauPage, {
      width: '250px',
      height:'250px',
      data:{id:idCadeau}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  openDialogAdresse(): void {
    const dialogRef = this.dialog.open(AdressePage, {
      width: '250px',
      height:'200px',
      data:{id:this.idEntreprise}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  openDialogCadeau(idCadeau): void {
    const dialogRef = this.dialog.open(DetailCadeauPage, {
      width: '350px',
      data:{id:idCadeau}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalCadeauPage,
      cssClass: 'my-custom-class',
      componentProps:{
        idEntreprise:this.idEntreprise
      }
    });
    return await modal.present();
  }

  listEncaisse(idEntreprise){
    this.entrepriseService.getEncaisse(idEntreprise).subscribe((res:any)=>{
      try {
            this.encaisses = res.message;
            console.log("Encaisse", this.encaisses);
      } catch (error) {
        console.log("Erreur",error);
      }
    })
  }

  listDepense(idEntreprise){
    this.entrepriseService.getDepense(idEntreprise).subscribe((res:any)=>{
      try {
          this.depenses = res.message;
      } catch (error) {
        console.log("Erreur", error)
      }
    })
  }

  detailAvoir(){
    this.router.navigate(["tabs/avoirs",this.idEntreprise]);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getLengthCadeau(this.idEntreprise);
      this.getLengthDepense(this.idEntreprise);
      this.getLengthEncaisse(this.idEntreprise);
      this.listCadeauClient(this.idEntreprise);
      this.listEncaisse(this.idEntreprise);
      this.listDepense(this.idEntreprise);

      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }

  callNumbres(){
    this.callNumber.callNumber(this.entreprise?.phone1, true)
    .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err));
  }

  openDialogCadeauImage(idCadeau): void {
    const dialogRef = this.dialog.open(ImageCadeauPage, {
      width: '350px',
      data:{id:idCadeau}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  openDialogDepense(): void {
    const dialogRef = this.dialog.open(OpenDepensePage, {
      width: '450px',
      data:{id:this.idEntreprise}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  openDialogEncaisse(): void {
    const dialogRef = this.dialog.open(OpenEncaissePage, {
      width: '450px',
      data:{id:this.idEntreprise}});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
