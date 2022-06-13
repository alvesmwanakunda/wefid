import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-politique',
  templateUrl: './modal-politique.page.html',
  styleUrls: ['./modal-politique.page.scss'],
})
export class ModalPolitiquePage implements OnInit {

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
