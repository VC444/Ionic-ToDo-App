import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckboxInfoPage } from '../checkbox-info/checkbox-info';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //items: string[] = ["Checkbox 1", "Checkbox 2", "Checkbox 3"];
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParam: NavParams, db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  onAddClick() {
    this.navCtrl.push(CheckboxInfoPage);
  }

}
