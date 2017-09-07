import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CheckboxInfoPage } from '../pages/checkbox-info/checkbox-info';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var firebaseConfig = {
    apiKey: "AIzaSyAL3x_1JVrQ4wpGhPh-1Zyg8NNsHEqnI58",
    authDomain: "firstionicapp-4e4da.firebaseapp.com",
    databaseURL: "https://firstionicapp-4e4da.firebaseio.com",
    projectId: "firstionicapp-4e4da",
    storageBucket: "firstionicapp-4e4da.appspot.com",
    messagingSenderId: "772301789477"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CheckboxInfoPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CheckboxInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
