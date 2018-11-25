import { Component, OnInit } from '@angular/core';
import {RestService} from '../../shared/services/rest.service';

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

  constructor(private restService: RestService) {
    this.initShop();
  }

  ngOnInit() {
  }

  initShop() {
    this.restService.getRewards().subscribe(response => {this.shop = Object.values(response); console.log(response); });
    console.log(this.shop);
  }

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
}
