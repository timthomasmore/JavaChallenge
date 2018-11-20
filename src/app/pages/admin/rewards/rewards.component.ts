import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {

  newItem = {
    title: '',
    description: '',
    price: 0,
    picture: ''
  }

  shop = [];
  modal = [];
  tempItem = [];

  tempLorem = 'Fusce commodo, ipsum id viverra tempus, quam lorem suscipit magna, ' +
    'auctor pharetra metus justo non ipsum. Nunc eros purus, blandit eget tempor a, ' +
    'venenatis in massa. Sed tristique, urna et dapibus volutpat, justo nibh iaculis dui, ' +
    'eu ultrices massa lacus et velit. Etiam hendrerit felis metus, vel sollicitudin nisl tincidunt quis. ' +
    'Suspendisse porta fringilla eleifend. Donec at tempor nisi. Nullam viverra tellus neque, id tincidunt ipsum dictum non. ' +
    'Integer rutrum sed felis nec fermentum. Pellentesque eros nunc, sollicitudin vitae lectus quis, aliquam feugiat eros. Morbi tempus, ' +
    'lectus eget maximus facilisis, nulla mauris egestas arcu, quis blandit erat mauris vitae justo. Cras elit ligula, ' +
    'accumsan vel sagittis sit amet, convallis vitae nisi. Phasellus non maximus massa. Phasellus pharetra lorem lorem, commodo ' +
    'tincidunt leo vestibulum at. Pellentesque quis vestibulum ante. Cras finibus nisi vel sapien fermentum condimentum. Donec sit ' +
    'amet turpis tellus.';

  constructor() { this.initShop(); }

  ngOnInit() {
  }

  addItem() {
    this.tempItem = [];
    this.tempItem.push(this.newItem.title);
    this.tempItem.push(this.newItem.price);
    //#######tijdelijk een andere image, moet nog gefixed worden
    this.tempItem.push('assets/images/placeholder.png');
    //this.tempItem.push(this.newItem.picture);
    this.tempItem.push(this.newItem.description);
    this.shop.push(this.tempItem);
    this.newItem.title = '';
    this.newItem.price = 0;
    this.newItem.description = '';
    this.newItem.picture = '';

    //###HIER NOG LOGICA OM HET ITEM in DE DATABASE TE PLAATSEN!!!!
  }

  deleteItem(item) {
    let newShop = [];
    for (let i = 0; i < this.shop.length; i++) {
      if (item[0] !== this.shop[i][0]) {
        newShop.push(this.shop[i]);
      }
    }
    this.shop = newShop;

    //###HIER NOG LOGICA OM HET ITEM UIT DE DATABASE TE VERWIJDEREN

    return false;
  }

  initShop() {
    //## HIER DE API LOGICA OM this.SHOP OP TE VULLEN MET ITEMS UIT DE DATABASE

    //TIJDELIJKE DUMMY DATA NU
    this.shop.push(['Bak Bier', 25, 'assets/images/bier.png', this.tempLorem]);
    this.shop.push(['Cursus JAVA', 10, 'assets/images/Java.png', this.tempLorem]);
    this.shop.push(['Uitstap Barcelona', 50, 'assets/images/barcelona.png', this.tempLorem]);
    this.shop.push(['Vrije dag', 20, 'assets/images/vrij.jpg', this.tempLorem]);
  }

  openModal(item) {
    this.modal = item;
    document.getElementById('clickButton').click();
  }

  openModalNG(modal, item) {
    modal.open();
    this.tempItem = item;
    return false;
  }

  closeModal(modal) {
    modal.close();
  }

  deleteModal(modal) {
    modal.close();
    this.onClose();
    this.deleteItem(this.tempItem);
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'Reward is verwijderd!',
    });
  }

}
