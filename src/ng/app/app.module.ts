import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 

import { AppBoostrapModule } from './app-bootstrap/app-boostrap.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule
  ],
  exports: [
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
