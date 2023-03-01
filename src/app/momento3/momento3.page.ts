import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-momento3',
  templateUrl: './momento3.page.html',
  styleUrls: ['./momento3.page.scss'],
})
export class Momento3Page implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
}
