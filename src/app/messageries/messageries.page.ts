import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DetailMessagePage } from './detail-message/detail-message.page';
import { ClientService } from '../shared/services/client.service';
import { NotificationService } from '../shared/services/notification.service';



@Component({
  selector: 'app-messageries',
  templateUrl: './messageries.page.html',
  styleUrls: ['./messageries.page.scss'],
})
export class MessageriesPage implements OnInit {

  client:any;
  message:any=[];
  isSelected:boolean=false;
  checked:boolean=false;
  objetMessage={
    client:"",
    entreprise:""
  };
  messageArray=[];

  //desactive button back
  private isCurrentView:boolean;
  private displayWarning:boolean;
  subscriptions: Subscription = new Subscription();
  clickMessageEvent: Subscription;

  @ViewChildren('myCheckbox') myCheckbox: QueryList<ElementRef>;

  constructor(
    private platform: Platform,
    public modalController: ModalController,
    private clientService: ClientService,
    private notificationService:NotificationService,

  ) {
    this.subscriptions.add(
      this.platform.backButton.subscribeWithPriority(9999, (processNextHandler)=>{
        if(this.isCurrentView){
          this.displayWarning=true;
        }else{
          processNextHandler();
        }
      })
    );
    this.clickMessageEvent = this.notificationService.getLengthMessageEvent().subscribe(()=>{
      this.getClient();
     })

   }

  ngOnInit() {
    this.getClient();
    this.notificationService.getMessageAppVisite().subscribe((res:any)=>{
      console.log("Socket Data", res);
      if(res){
        this.getClient();
        this.message = res;
      }

   });
  }

  getClient(){

     this.clientService.getUser().subscribe((res:any)=>{
      try {
           //console.log("Client", res);
           this.client = res.message;
           this.getAllMessage(res.message._id);
      } catch (error) {
        console.log("Erreur", error);
      }
     })
  }

  getAllMessage(idClient){
    this.clientService.allMessage(idClient).subscribe((res:any)=>{
      try {
           this.message = res.message;
           console.log("message", this.message);
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }

  ionViewDidEnter(){
    this.isCurrentView=true;
  }

  ionViewWillLeave(){
    this.isCurrentView = false;
  }

  async presentModal(idEntreprise) {
    const modal = await this.modalController.create({
      component: DetailMessagePage,
      cssClass: 'my-custom-class',
      componentProps:{
        idClient:this.client._id,
        idEntreprise:idEntreprise
      }
    });
    return await modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.getAllMessage(this.client._id);
      console.log('Async operation has ended');
      event.target.complete();
    }, 200);
  }

  onSelected(){
    if(this.isSelected){
      this.isSelected=false;
    }else{
      this.isSelected=true;
    }
  }

  disableOptions(){
    this.myCheckbox.forEach((element)=>{
      element.nativeElement.checked = false;
    });
    this.messageArray=[];
  }

  selectedData(event:any, idEntreprise:any){

    if(event.currentTarget.checked){
      this.objetMessage={"client":this.client._id,"entreprise":idEntreprise};
      this.messageArray.push(this.objetMessage);
      console.log("list true", this.messageArray);
    }else{
      this.messageArray = this.messageArray.filter(item=>item.entreprise!=idEntreprise);
      console.log("list false", this.messageArray);

    }
      console.log('idClient', event.currentTarget.checked);
  }

  deleteAllMany(){
    this.clientService.deleteAll(this.messageArray).subscribe((res:any)=>{
      try {
           console.log("Success", res);
           this.getAllMessage(this.client._id);
      } catch (error) {
        console.log("Erreur", error);
      }
    })
  }


}
