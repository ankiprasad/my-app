import { Directive, ElementRef, Renderer2, OnInit, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[betterDirective]'
})
export class MyCustomBetterDirecctiveDirective implements OnInit {
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
}
