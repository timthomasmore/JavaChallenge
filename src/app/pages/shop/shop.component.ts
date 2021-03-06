import { Component, OnInit } from '@angular/core';
import {RestService} from '../../shared/services/rest.service';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [RestService]
})

export class ShopComponent implements OnInit {

  shop = [];
  modal = [];
  res = '';
  userCredits:  '';
  userData = [];

  constructor(private restService: RestService) {
    this.initShop();
    this.getUserData();
  }

  ngOnInit() {
  }

  initShop() {
    this.restService.getRewards().subscribe(response => {this.shop = Object.values(response); });
    //this.restService.getRewards().
    // subscribe(response => {map((result: Response) =>  result.json()); this.shop = this.json2array(response); });

  }

/*  json2array(json) {
    const result = [];
    const keys = Object.keys(json);
    keys.forEach(function(key) {
      result.push(json[key]);
    });
    return result;
  }*/

  buy(item) {
    this.restService.redeemReward(item._id).subscribe( res => this.confirmModal(item, res) );
  }

  openModal(item) {
    this.modal = item;
    document.getElementById('clickButton').click();
  }

  confirmModal(item, res) {
    this.res = res;
    this.modal = item;
    document.getElementById('confirmButton').click();
  }

  getUserData() {
    this.restService.getUserInfo().subscribe(
      (obj) => Object.keys(obj).forEach( key => this.userData[key] = obj[key] ),
      (err) => console.log('Error', err),
      () => this.initUserData( this.userData ) );
  }

  pageReload() {
    //TIJDELIJKE FIX OMDAT HET AANTAL PUNTEN IN HET GEBRUIKERS PROFIEL NOG NIET
    //UPDATE NA HET KOPEN VBAN EEN ITEM
    //MOGELIJKE FIX? ENKEL DIE COMPONENT HERLADEN
    location.reload();
  }

  initUserData(d) {
    this.userCredits = d[0].credits;
  }
}
