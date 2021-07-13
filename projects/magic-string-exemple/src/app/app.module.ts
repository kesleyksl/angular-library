import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {MagicStringModule} from "magic-string"

@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
    MagicStringModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
