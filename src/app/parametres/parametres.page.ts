import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
    private platform: Platform,
    private authService: AuthService,
    private alertController:AlertController,
    private toast: ToastController,
    private router: Router
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
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  logout():void{
    this.authService.logout();
  }

  delete():void{
    this.authService.deleteCompte().subscribe((res:any)=>{
      try {
            console.log("User", res);
            this.successToast();
      } catch (error) {
        console.log("Error", error)
        this.errorToast();
      }
    })
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'Déconnexion',
      message:'Êtes-vous sûr de vouloir vous déconnecter',
      buttons:[
        {
          text: 'Fermer',
          role:'cancel'
        },
        {
           text:'Confirmer',
           role:'confirm',
           handler:()=>{
             this.logout();
           }
        }

      ]
    });
    await alert.present();
  }

  async presentAlertCompte(){
    const alert = await this.alertController.create({
      header:'Compte',
      message:'Êtes-vous sûr de vouloir supprimer votre compte',
      buttons:[
        {
          text: 'Fermer',
          role:'cancel'
        },
        {
           text:'Confirmer',
           role:'confirm',
           handler:()=>{
             this.delete();
             this.router.navigate(["login"]);
           }
        }

      ]
    });
    await alert.present();
  }

  async successToast(){
    let myToast = await this.toast.create({
      message:'Votre compte a été supprimé avec succès',
      duration:3000,
      position:'bottom',
      cssClass: 'my-custom-class',
    });
    myToast.present();
  }

  async errorToast(){
    let myToast = await this.toast.create({
      message:'Une erreur est survenue lors de la suppression de votre compte',
      duration:3000,
      position:'bottom',
      cssClass: 'my-custom-class-error',
    });
    myToast.present();
  }

}
