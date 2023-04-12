import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomValidators } from "ng2-validation";
import { restResponse } from './../shared/models/restResponse';
import { ClientService } from '../shared/services/client.service';
import { AlertController, ToastController, LoadingController  } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AuthService } from '../shared/services/auth.service';






@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  isEtape:boolean=false;
  hide:boolean=true;
  hideC:boolean=true;
  onLoadForm:boolean=false;
  isForm:boolean=false;
  signupForm: FormGroup;
  submitted = false;
  signupFormErrors:any;
  errorMessage: string="";
  user:any;
  loginUser:any;
  ios:boolean;
  android:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private http: HttpClient,
    private loadingController: LoadingController,
    public platform: Platform,
    private authService: AuthService,
  ) {
    this.signupFormErrors={
      emailorphone:{},
    };
    this.ios = platform.is('ios');
    this.android = platform.is('android');
  }

  account_validation_messages={
    emailorphone:[
      {
        type: "required",
        message: "Adresse email ou téléphone obligatoire",
      },{
        type:"pattern",
        message: "Identifiant incorrect. Veuillez reessayer.",
      }
    ],

    confirmpassword: [
      { type: "required", message: "Vous devez confirmer le mot de passe" },
      { type: "minlength", message: "Mot de passe incorrect." },
    ],
    password: [
      { type: "required", message: "Le mot de passe est obligatoire"},
      { type: "minlength", message: "Mot de passe incorrect."},
      {
        type: "pattern",
        message:
          "Le mot de passe doit comporter au moins 8 caracteres,une lettre majuscule, une lettre minuscule et un chiffre",
      },
    ],
  };

  onFormValuesChanged(){
    for (const field in this.signupFormErrors){
      if(!this.signupFormErrors.hasOwnProperty(field)){
        continue;
      }
      this.signupFormErrors[field]={};
      const control = this.signupForm.get(field);
      if(control && control.dirty && !control.valid){
        this.signupForm[field] = control.errors;
      }
    }
  }

  ngOnInit() {

    this.isForm = false;
    this.errorMessage="";

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

    this.signupForm = new FormGroup({
      emailorphone: new FormControl("",[
        Validators.required,
        Validators.pattern(
          "^((\\+\\d{1,3}(-| )?\\(?\\d\\)?(-| )?\\d{1,5})|(\\(?\\d{2,6}\\)?))(-| )?(\\d{3,4})(-| )?(\\d{4})(( x| ext)\\d{1,5}){0,1}$|(\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+)"
        )
      ]),
      nom:new FormControl("",Validators.required),
      prenom:new FormControl("",Validators.required),
      genre:new FormControl("",Validators.required),
      adresse:new FormControl("",Validators.required),
      age:new FormControl("",Validators.required),
      password:password,
      confirmpassword: confirmpassword,
    });
  }

  onRegisterUser():void{
    this.onLoadForm = true;
    this.submitted = true;
    this.user = {};
    this.loginUser ={};

    this.loadingPresent("ifOfLoading").then((res)=>{

      if(!this.signupForm.invalid){

        Object.assign(this.user, this.signupForm.value);
        this.clientService.addClient(this.user).subscribe((res:any)=>{
          let response = <restResponse>res;
          if(!res.success){
              this.signupFormErrors["emailorphone"].found = true;
              this.loadingDismiss("ifOfLoading");
          }else{
            if(response.message["phone"]){
              this.isForm=true;
              this.loadingDismiss("ifOfLoading");
              console.log("user", this.user);
              this.loginUser = {"emailorphone":res.message.phone, "password":this.user.password}
              this.login(this.loginUser)

            }else{
              this.isForm=true;
              this.loadingDismiss("ifOfLoading");
              this.loginUser = {"emailorphone":res.message.email, "password":this.user.password}
              this.login(this.loginUser)
            }
          }
          this.onLoadForm = false;
          this.loadingDismiss("ifOfLoading");
        });
      }else{
        this.onLoadForm = false;
        this.loadingDismiss("ifOfLoading");
      }

    }).catch((err)=>{
      console.log("Erreur", err);
      this.loadingDismiss("ifOfLoading");
    })

  }

  nextEtape(){
    if(this.isEtape){
      this.isEtape=false;
    }else{
      this.isEtape=true;
    }
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

  login(login){
    this.authService
      .signin(login)
      .then((response) => {
        this.authService.setUser(response.message);
        this.router.navigate(["tabs/dashboard"]);
      })
      .catch((err) => {
        console.log("err", err);
      });

  }
}
