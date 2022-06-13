import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detail-plan',
  templateUrl: './detail-plan.page.html',
  styleUrls: ['./detail-plan.page.scss'],
})
export class DetailPlanPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    console.log("Suis la");
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
