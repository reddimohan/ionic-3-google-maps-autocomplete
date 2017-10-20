import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MapProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MapProvider {

  app: any;
  google_api_key: any;

  contentHeader: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    this.google_api_key = 'AIzaSyCKA5hvn9vH1cIdiwGEwTgeyBhys2gHpI0';
    console.log('Hello MapProvider Provider');
  }

  getAddress(params) {
    let url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + params.lat + ',' + params.long;
    return this.GET(url);
  }

  getStreetAddress(params) {
    let url = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + this.google_api_key + '&latlng=' + params.lat + ',' + params.long + '&result_type=street_address';
    return this.GET(url);
  }

  GET(url) {
    return this.http.get(url).map(res => res.json());
  }

  POST(url, params) {
    // let options = new RequestOptions({
    //   headers: this.contentHeader
    // });
    // return this.http.post(url, params, options).map(res => res.json());
  }

  DEL(url) {
    // let options = new RequestOptions({
    //   headers: this.contentHeader
    // });
    // return this.http.delete(url, options).map(res => res.json());
  }


}
