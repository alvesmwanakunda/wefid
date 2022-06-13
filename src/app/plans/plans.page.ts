import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailPlanPage } from './detail-plan/detail-plan.page';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailPlanPage,
      cssClass: 'my-custom-class',
      /*componentProps:{
        idEntreprise:this.idEntreprise
      }*/
    });
    return await modal.present();
  }

}
