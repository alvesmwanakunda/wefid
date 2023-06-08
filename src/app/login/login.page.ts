import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { 
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide:boolean=true;
  onLoadForm:boolean=false;
  loginForm: FormGroup;
  loginFormErrors: any;
  onAuthServiceLogin;
  testValidation: boolean = false;
  user: any;
  private loggedIn: boolean;
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8),
  ]);
  emailorphone = new FormControl("", [
    Validators.required,
  ]);
  ios:boolean;
  android:boolean;
  messageSpace:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public loadingController: LoadingController,
    public platform: Platform
  ) {
    this.loginFormErrors = {
      emailorphone: {},
      password: {},
    };
    this.ios = platform.is('ios');
    this.android = platform.is('android');
   }
   account_validation_messages = {
    emailorphone: [
      {
        type: "pattern",
        message:
          'Identifiant incorrect. Reessayer ou cliquez sur "Identifiant oublie" pour reinitialiser.',
      },
    ],
  };

  ngOnInit() {

    localStorage.clear();
    this.signOut();

    this.loginForm = this.formBuilder.group({
      emailorphone: this.emailorphone,
      password:this.password,
    });
    this.loginForm.valueChanges.subscribe(()=>{
      this.onLoginFormValuesChanged();
    });
  }

  handleRedirectOnLogin(user){
    this.router.navigate(["tabs/dashboard"]); 
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};
      // Get the contro
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  onLogin(): void {
    this.presentLoading();
    
    this.onLoadForm = true;
    if (this.password.value == "" || this.emailorphone.value == "") {
      this.testValidation = true;
      this.onLoadForm = false;
      return;
    }
    this.testValidation = false;

    this.loginFormErrors["emailorphone"].notfound = false;
    this.onAuthServiceLogin = this.authService
      .signin(this.loginForm.value)
      .then((response) => {
        if (!response.success) {
          this.loginFormErrors["emailorphone"].notfound = true;
        } else {
          if(response.message.user.role=="user"){
            this.authService.setAccessToken(response.message.token);
            this.authService.setUser(response.message);
            this.handleRedirectOnLogin(response.message);
          }else{
            this.loginFormErrors["emailorphone"].notfound = true;
          }
        }
        this.onLoadForm = false;
      })
      .catch((err) => {
        //console.log("err", err);
        this.onLoadForm = false;
      });
  }

   signOut(): void {
    if (this.loggedIn) this.authService.logout();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message:'Veuillez patienter...',
      duration:2000
    });
    await loading.present();
    const {role,data}=await loading.onDidDismiss();
    console.log('Loading dismessed!');
  }

  eventHandler(event) {
    console.log(event.keyCode);
    if(event.keyCode == 32){
      //your code
      this.messageSpace = "Veuillez respecter le format requis (77xxxxxxx)";
  }
 }

}
