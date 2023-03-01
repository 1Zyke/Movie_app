import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

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
