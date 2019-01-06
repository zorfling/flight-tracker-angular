import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { registerLocaleData } from '@angular/common';
import localeEnAU from '@angular/common/locales/en-AU';
registerLocaleData(localeEnAU);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightListComponent } from './flight-list/flight-list.component';

@NgModule({
  declarations: [AppComponent, FlightCardComponent, FlightListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-AU' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
