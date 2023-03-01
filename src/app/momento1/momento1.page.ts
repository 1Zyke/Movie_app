import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-momento1',
  templateUrl: './momento1.page.html',
  styleUrls: ['./momento1.page.scss'],
})
export class Momento1Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
}
