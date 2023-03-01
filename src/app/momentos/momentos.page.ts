import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  constructor(private router: Router) { 
  }

  neon() {
    this.router.navigate(['Neon']);
  }

  morp() {
    this.router.navigate(['Morpheus']);
  }

  smith() {
    this.router.navigate(['Smith']);
  }

  ngOnInit() {
  }


}
