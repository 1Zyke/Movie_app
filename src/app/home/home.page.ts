import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('myIframe') myIframe: ElementRef;
  @ViewChild('container') container: ElementRef;
  showMenu = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit() {
    
  }

  onIframeLoad():void {
    const container = this.container.nativeElement;
    const text = container.querySelector('ion-title')
    const iframe = container.querySelector('iframe');

    // Oculta el texto cuando se reproduce el iFrame
    text.style.display = 'none';

    // Muestra el texto cuando el iFrame se detiene
    iframe.addEventListener('pause', () => {
      text.style.display = 'block';
    });
  }

  // Cambiando el tamaño del Iframe dependiendo de las dimensiones del dispositivo
  resizeIframe(): void {
    const obj = this.myIframe.nativeElement;
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 10 + 'px';
  }
  

}



