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
  tempItem;

  constructor(private restService: RestService) {
    this.initShop();
  }

  ngOnInit() {
  }

  addItem() {
    this.restService.createReward(this.newItem);
    this.initShop();

    this.newItem.name = '';
    this.newItem.credits = 0;
    this.newItem.description = '';
    this.newItem.photo = '';
  }

  deleteItem(item) {
    let newShop = [];
    for (let i = 0; i < this.shop.length; i++) {
      if (item.name !== this.shop[i].name) {
        newShop.push(this.shop[i]);
      }
    }
    this.shop = newShop;

    this.restService.deleteReward(item);

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
