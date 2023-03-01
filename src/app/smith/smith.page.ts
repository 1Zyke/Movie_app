import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-smith',
  templateUrl: './smith.page.html',
  styleUrls: ['./smith.page.scss'],
})
export class SmithPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
