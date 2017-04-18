import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyCustomDirectiveDirective } from './my-custom-directive.directive';
import { MyCustomBetterDirecctiveDirective } from './my-custom-better-direcctive.directive';
import { MyCustomRenderv2DirectiveDirective } from './my-custom-renderv2-directive.directive';
import { MyCreateCustomDirectiveDirective } from './my-create-custom--directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomDirectiveDirective,
    MyCustomBetterDirecctiveDirective,
    MyCustomRenderv2DirectiveDirective,
    MyCreateCustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
