import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-model-legal',
  templateUrl: './model-legal.page.html',
  styleUrls: ['./model-legal.page.scss'],
})
export class ModelLegalPage implements OnInit {

  constructor(public modalController: ModalController) { }

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
