import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/shared/services/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {

  user:any;
  userForm: FormGroup;

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
    private clientService:ClientService,
    private loadingController:LoadingController,
    private toast: ToastController,
    private platform: Platform,
    ) { 
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
    this.getUser();
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  getUser(){
    this.clientService.getUser().subscribe((res:any)=>{
      try {
           console.log("User",res);
           this.user = res.message;
           if(this.user){
            this.userForm = new FormGroup({
              nom:new FormControl(this.user?.user.nom,[Validators.required]),
              prenom: new FormControl(this.user?.user.prenom,[Validators.required]),
              phone: new FormControl(this.user?.user.phone,null),
              genre:new FormControl(this.user.genre,[Validators.required]),
              adresse:new FormControl(this.user.adresse,[Validators.required]),
              age: new FormControl(this.user.age,[Validators.required])
            })
           }
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  updateUser(user:any){
    let payload ={
      nom:user.user.nom,
      prenom:user.user.prenom,
      genre:user.genre,
      adresse:user.adresse,
      age:user.age
    }
    console.log("Payload",payload);
    this.loadingPresent("ifOfLoading").then((res)=>{
      this.clientService.updateUser(payload).subscribe((res:any)=>{
        try {
          this.user = res.message;
          this.loadingDismiss("ifOfLoading");
          this.successToast();
          console.log("User update", res);
          this.getUser();
        } catch (error) {
          console.log("Erreur", error);
          this.loadingDismiss("ifOfLoading");
          this.errorToast();
        }
      })
    }).catch((err)=>{
      this.loadingDismiss("ifOfLoading");
    }) 
  }

  async loadingPresent(loadingId: string) {

    const loading = await this.loadingController.create({
      id: loadingId,
      //message: "Veuillez patienter...",
      spinner: "circles"
    });
    return await loading.present();
  }

  async loadingDismiss(loadingId: string) {
    return await this.loadingController
      .dismiss(null, null, loadingId)
      .then((response) =>{
        console.log("loading dismissed alves", response)
      }).catch((err) => {
        console.log("Erreur", err);
      });
  }

  async successToast(){
    let myToast = await this.toast.create({
      message:'Votre profile a été modifié avec succès',
      duration:3000,
      position:'bottom',
      cssClass: 'my-custom-class',
    });
    myToast.present();
  }

  async errorToast(){
    let myToast = await this.toast.create({
      message:'Une erreur est survenue lors de la modification de profile',
      duration:3000,
      position:'bottom',
      cssClass: 'my-custom-class-error',
    });
    myToast.present();
  }

}
