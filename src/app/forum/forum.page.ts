import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async showModal() {
    console.log('showModal()');
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        name: 'roberto silva',
        email: 'robertosilva@gmail.com',
        img: 'assets/img/adocao2.png'
      }
    });

    await modal.present();
  }
}
