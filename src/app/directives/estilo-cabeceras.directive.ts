import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appEstiloCabeceras]',
})
export class EstiloCabecerasDirective implements OnInit {
  constructor(private elemento: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '30px');
  }
}
