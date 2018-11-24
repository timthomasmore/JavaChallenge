import { Component, OnInit } from '@angular/core';
import {RestService} from '../../shared/services/rest.service';
import {ChartsService} from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  providers: [RestService]
})
export class ShopComponent implements OnInit {

  shop = [];
  modal = [];


  constructor(private restService: RestService) {

    this.initShop();


  }

  ngOnInit() {
  }

  initShop() {
    //## HIER DE API LOGICA OM this.SHOP OP TE VULLEN MET ITEMS UIT DE DATABASE
    this.restService.getRewards().subscribe(response => {this.shop = Object.values(response); console.log(response); });

    //TIJDELIJKE DUMMY DATA NU
    console.log();
    /*this.shop.push(["Bak Bier", 25, "assets/images/bier.png", this.tempLorem]);
    this.shop.push(["Cursus JAVA", 10, "assets/images/Java.png", this.tempLorem]);
    this.shop.push(["Uitstap Barcelona", 50, "assets/images/barcelona.png", this.tempLorem]);
    this.shop.push(["Vrije dag", 20, "assets/images/vrij.jpg", this.tempLorem]);*/
  }

  buy(item) {
    console.log(this.shop);
  }

  openModal(item) {
    this.modal = item;
    document.getElementById('clickButton').click();
  }
}
