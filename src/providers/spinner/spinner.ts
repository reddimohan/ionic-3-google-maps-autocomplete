import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { LoadingController } from 'ionic-angular';


/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SpinnerProvider {

  loader: any;

  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello SpinnerProvider Provider');
  }

  load() {
    this.loader = this.loadingCtrl.create({
      content: ''
    });
    this.loader.present();
  }

  dismiss() {
    if(this.loader){ this.loader.dismiss(); this.loader = null; }
  }

}
