import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckboxInfoPage } from '../checkbox-info/checkbox-info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  items: string[] = ["Checkbox 1", "Checkbox 2", "Third"];

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    // alert(this.navParam.get('addItem'));
  }

  onAddClick() {
    this.navCtrl.push(CheckboxInfoPage);
  }

}
