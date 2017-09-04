import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-checkbox-info',
  templateUrl: 'checkbox-info.html',
})
export class CheckboxInfoPage {

  item: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckboxInfoPage');
  }

  submitInfo() {
    this.navCtrl.setRoot(HomePage, {
      addItem: this.item
    });
  }

}
