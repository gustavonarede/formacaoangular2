import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorModule} from './conversor';
import { HttpClientModuel} from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConversorModule,
    HttpClientModule,
    HttpClientModuel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
