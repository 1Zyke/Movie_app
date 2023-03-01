import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Characters', url: '/personajes', icon: 'paper-plane' },
    { title: 'Moments', url: '/momentos', icon: 'happy' },
    { title: 'About', url: '/acercade', icon: 'person' },
    { title: 'MyLife', url: '/mivida', icon: 'accessibility' },
    { title: 'Hire Me At', url: '/contratame', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
