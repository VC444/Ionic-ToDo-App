import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckboxInfoPage } from './checkbox-info';

@NgModule({
  declarations: [
    CheckboxInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckboxInfoPage),
  ],
})
export class CheckboxInfoPageModule {}
