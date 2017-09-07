import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-checkbox-info',
  templateUrl: 'checkbox-info.html',
})
export class CheckboxInfoPage {

  item: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckboxInfoPage');
  }

  submitInfo() {
    this.db.list('/items/').push(this.item);
    this.navCtrl.setRoot(HomePage);
    /*
    this.navCtrl.setRoot(HomePage, {
      addItem: this.item
    });
    */
  }

}
