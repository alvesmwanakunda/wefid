import { Component, OnInit, ViewChild } from '@angular/core';
import { EntrepriseService } from '../shared/services/entreprise.service';
import { PopoverController } from '@ionic/angular';
import { QrcodeUserPage } from '../qrcode-user/qrcode-user.page';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router} from "@angular/router";
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { ClientService } from '../shared/services/client.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  //desactive button back
  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription()

  slideOpts={
    initialSlide:0,
    speed:500,
    autoplay:true
  };
  slideOpt={
    initialSlide:0,
  };
  entreprises:any=[];
  operations:any=[];
  categorie="Restaurant";
  isEntreprise=false;
  isOperation=false;
  qrCode=false;
  user:any;
  status:any="All";

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll:   IonVirtualScroll;


  constructor(
    private entrepriseService: EntrepriseService,
    private popoverController: PopoverController,
    public dialog: MatDialog,
    private router: Router,
    private platform: Platform,
    private clientService: ClientService,
    private qrScanner: BarcodeScanner
    ) { 
      //this.user = JSON.parse(localStorage.getItem('user'));
      //console.log("User", this.user);
      this.getUser();
      this.subscriptions.add(
        this.platform.backButton.subscribeWithPriority(9999, (processNextHandler)=>{
          if(this.isCurrentView){
            this.displayWarning=true;
          }else{
            processNextHandler();
          }
        })
      )
    }

  ngOnInit() {

    this.getEntreprise();
    this.getOperations();
  }

  getUser(){
    this.clientService.getUser().subscribe((res:any)=>{
      try {
        this.user = res.message;
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  getEntreprise(){
    this.entrepriseService.getAllEntreprise().subscribe((res:any)=>{
      try {
         //console.log("Entreprises", res);
          this.entreprises = res.message;
          /*if(this.entreprises.lenght>=1){
            this.isEntreprise=true;
          }*/
      } catch (error) {
        console.log("Erreur", error);
      }

    })
  }

  getOperations(){
    this.entrepriseService.getOperationByClient().subscribe((res:any)=>{
      try {
          //console.log("Mes operations",res);
          this.operations = res.message;
          if(this.operations.length>=1){
            this.isEntreprise=false;
            console.log("Ici", this.isEntreprise);
          }else{
            this.isEntreprise=true;
          }
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  filterClick(categorie:String){
   console.log("Categorie", categorie);
   //this.isEntreprise=false;

   if(!this.isEntreprise){
     if(categorie!="All"){
      this.status = categorie; 
      this.entrepriseService.getOperationByClient().subscribe((res:any) =>{
        this.operations = res.message.filter(product=>product.entreprise.categorie==categorie);
        console.log("Categorie ", this.operations.length);
      });
     }else{
      this.status = "All"; 
      this.entrepriseService.getOperationByClient().subscribe((res:any) =>{
        this.operations = res.message
        console.log("Categorie all", this.operations.length);
      });
     }
      
   }else{

    if(categorie!="All"){ 
      this.status =categorie;
      this.entrepriseService.getAllEntreprise()
         .subscribe((res:any) => this.entreprises = res.message.filter(product=>product.categorie==categorie));
    }else{
      this.status = "All";
      this.entrepriseService.getAllEntreprise()
         .subscribe((res:any) => this.entreprises = res.message);
    }
    
   }

   
  }

  applyFilter(eveent:Event){

    const filterValue = (eveent.target as HTMLInputElement).value;
    console.log("Valeur", filterValue);

    if(!this.isEntreprise){

      this.entrepriseService.getOperationByClient()
        .subscribe((res:any) => this.operations = res.message.filter(product=>product.entreprise.nom.toLowerCase().includes(filterValue)));

    }else{

      this.entrepriseService.getOperationByClient()
        .subscribe((res:any) => this.entreprises = res.message.filter(product=>product.nom.toLowerCase().includes(filterValue)));
    }

  }

  isQrCode(){
    console.log("Je suis dedans");
    this.qrCode=true;
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: QrcodeUserPage,
      cssClass: 'user-popover',
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QrcodeUserPage, {
      width: '250px',
      height:'250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  detailEntreprise(idEntreprise){

    this.router.navigate(["tabs/entreprise",idEntreprise]);

  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      this.getUser();
      this.getEntreprise();
      this.getOperations();
      event.target.complete();
    }, 200);
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  scanner(){

    const options : BarcodeScannerOptions={
      preferFrontCamera:false,
      showFlipCameraButton:true,
      showTorchButton:false,
      torchOn:false,
      prompt:'Placer un code-barres à l\'intérieur de la zone de numérisation',
      resultDisplayDuration:100,
      orientation:'portrait'
    };

    this.qrScanner.scan(options).then(res=>{
      console.log('Scanned sommething', res);
      }).catch((e:any)=> console.log('Error is', e.name));
  }
}
