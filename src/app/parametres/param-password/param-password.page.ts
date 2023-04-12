import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { CustomValidators } from "ng2-validation";
import { ClientService } from 'src/app/shared/services/client.service';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-param-password',
  templateUrl: './param-password.page.html',
  styleUrls: ['./param-password.page.scss'],
})
export class ParamPasswordPage implements OnInit {

  passwordForm: FormGroup;
  passwordFormErrors: any;
  hideP = true;
  hidePassword = true;
  hideLP = true;
  userPassword:any;

  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();

  constructor(
    private loadingController:LoadingController,
    private toast: ToastController,
    private clientService:ClientService,
    private platform: Platform,
    private route: Router
  ) {
    this.passwordFormErrors = {
      lostpassword: {},
      password: {},
      confirmpassword:{}
    };
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

  account_validation_messages={

    confirmpassword: [
      { type: "required", message: "Vous devez confirmer le mot de passe" },
      { type: "minlength", message: "Mot de passe incorrect." },
    ],
    password: [
      { type: "required", message: "Le mot de passe est obligatoire" },
     // { type: "minlength", message: "Mot de passe incorrect. " },
      {
        type: "pattern",
        message:
          "Le mot de passe doit comporter au moins 8 caracteres,une lettre majuscule, une lettre minuscule et un chiffre",
      },
    ],
    lostpassword:[
      { type: "required", message: "L'ancien mot de passe est obligatoire" },
    ]

  };

  ngOnInit() {

    let password = new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?![#?!@$%^&*-]).{8,}$"
      ),
    ]);
    let confirmpassword = new FormControl("", [
      Validators.required,
      Validators.minLength(8),
      CustomValidators.equalTo(password),
    ]);

    let lostpassword = new FormControl("", [
      Validators.required
    ]);

    this.passwordForm = new FormGroup({
      password:password,
      confirmpassword: confirmpassword,
      lostpassword:lostpassword
    });

    this.passwordForm.valueChanges.subscribe(()=>{
      this.onLoginFormValuesChanged();
    });
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }
  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  onLoginFormValuesChanged() {
    for (const field in this.passwordFormErrors) {
      if (!this.passwordFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.passwordFormErrors[field] = {};

      // Get the contro
      const control = this.passwordForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.passwordFormErrors[field] = control.errors;
      }
    }
  }

  onPasswordUser():void{
    this.userPassword = {};

    this.loadingPresent("ifOfLoading").then((res)=>{

      if(!this.passwordForm.invalid){
        Object.assign(this.userPassword, this.passwordForm.value);
        this.clientService.updatePassword(this.userPassword).subscribe((res:any)=>{
          if(!res.success){
            this.passwordFormErrors["lostpassword"].notfound = true;
            this.loadingDismiss("ifOfLoading");
            this.errorToast();
          }else{
            this.loadingDismiss("ifOfLoading");
            this.successToast()
            this.route.navigate(["tabs/parametres"])
          }
        });
      }else{
        this.loadingDismiss("ifOfLoading");
      }

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
