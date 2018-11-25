import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {RestService} from '../../../shared/services/rest.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
  providers: [RestService]
})

export class RewardsComponent implements OnInit {

  newItem = {
    name: '',
    description: '',
    credits: 0,
    photo: ''
  };

  shop = [];
  modal = [];
  tempItem = [];

  constructor(private restService: RestService) {
    this.initShop();
  }

  ngOnInit() {
  }

  addItem() {
    this.tempItem = [];
    this.tempItem.push(this.newItem.name);
    this.tempItem.push(this.newItem.credits);
    this.tempItem.push('assets/images/placeholder.png'); //tijdelijk een andere image, moet nog gefixed worden
    //this.tempItem.push(this.newItem.picture);
    this.tempItem.push(this.newItem.description);
    this.shop.push(this.tempItem);
    this.newItem.name = '';
    this.newItem.credits = 0;
    this.newItem.description = '';
    this.newItem.photo = '';

    this.restService.createReward(this.tempItem);
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
    this.restService.getRewards().subscribe(response => {this.shop = Object.values(response); });
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
