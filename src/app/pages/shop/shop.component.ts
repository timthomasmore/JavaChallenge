import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shop = [];
  modal = [];

  tempLorem = "Fusce commodo, ipsum id viverra tempus, quam lorem suscipit magna, " +
    "auctor pharetra metus justo non ipsum. Nunc eros purus, blandit eget tempor a, " +
    "venenatis in massa. Sed tristique, urna et dapibus volutpat, justo nibh iaculis dui, " +
    "eu ultrices massa lacus et velit. Etiam hendrerit felis metus, vel sollicitudin nisl tincidunt quis. " +
    "Suspendisse porta fringilla eleifend. Donec at tempor nisi. Nullam viverra tellus neque, id tincidunt ipsum dictum non. " +
    "Integer rutrum sed felis nec fermentum. Pellentesque eros nunc, sollicitudin vitae lectus quis, aliquam feugiat eros. Morbi tempus, " +
    "lectus eget maximus facilisis, nulla mauris egestas arcu, quis blandit erat mauris vitae justo. Cras elit ligula, " +
    "accumsan vel sagittis sit amet, convallis vitae nisi. Phasellus non maximus massa. Phasellus pharetra lorem lorem, commodo " +
    "tincidunt leo vestibulum at. Pellentesque quis vestibulum ante. Cras finibus nisi vel sapien fermentum condimentum. Donec sit " +
    "amet turpis tellus.";

  constructor() { this.initShop()}

  ngOnInit() {
  }

  initShop(){
    //## HIER DE API LOGICA OM this.SHOP OP TE VULLEN MET ITEMS UIT DE DATABASE

    //TIJDELIJKE DUMMY DATA NU
    this.shop.push(["Bak Bier", 25, "assets/images/bier.png", this.tempLorem]);
    this.shop.push(["Cursus JAVA", 10, "assets/images/Java.png", this.tempLorem]);
    this.shop.push(["Uitstap Barcelona", 50, "assets/images/barcelona.png", this.tempLorem]);
    this.shop.push(["Vrije dag", 20, "assets/images/vrij.jpg", this.tempLorem]);
  }

  buy(item) {
    alert("proficiat, de koop knop voor item: \"" + item[0] + "\" doet nog absoluut niets!");
    return false;
  }

  openModal(item){
    this.modal = item;
    document.getElementById('clickButton').click();
  }
}
