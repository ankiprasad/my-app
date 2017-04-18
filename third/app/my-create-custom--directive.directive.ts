import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyCreateCustomDirective]'
})
export class MyCreateCustomDirectiveDirective {
  @Input() set appMyCreateCustomDirective(condition: boolean){
    if(condition){
        this.vcRef.createEmbeddedView(this.templateRef);
    } else {
        this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }
  
}
