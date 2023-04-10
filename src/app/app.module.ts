import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { TestComponent } from './test/test.component';
import { NavBarFrontComponent } from './nav-bar-front/nav-bar-front.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TestComponent,
    NavBarFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
