import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-morp',
  templateUrl: './morp.page.html',
  styleUrls: ['./morp.page.scss'],
})
export class MorpPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
}
