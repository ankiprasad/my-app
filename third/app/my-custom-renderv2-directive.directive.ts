import { Directive, Renderer, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyCustomRenderv2Directive]'
})
export class MyCustomRenderv2DirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }
  
  ngOnInit(): void {
    
  }
  
  @HostListener('mouseenter') mooseover(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green', false, false);
  }

  @HostListener('mouseenter') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
  }
}
