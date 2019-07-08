import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  result = {card_title: '', address: ''}
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
      // nothing for now
      this.result = {card_title: 'Current location', address: ''}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getAddress(){
    let mapModal = this.modalCtrl.create('MapPage')
    mapModal.present();

    mapModal.onDidDismiss((data)=> {
      this.result = {card_title: 'Selected location', address: data}
    })
  }

}
