import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-neon',
  templateUrl: './neon.page.html',
  styleUrls: ['./neon.page.scss'],
})
export class NeonPage implements OnInit {

  constructor(private navCtrl: NavController) {}


  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
