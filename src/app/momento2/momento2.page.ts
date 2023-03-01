import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-momento2',
  templateUrl: './momento2.page.html',
  styleUrls: ['./momento2.page.scss'],
})
export class Momento2Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
