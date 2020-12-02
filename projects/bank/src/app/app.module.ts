import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginModule} from 'login';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BalanceComponent } from './balance/balance.component';
import { InvestmentsLoansComponent } from './investments-loans/investments-loans.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { SettingsComponent } from './settings/settings.component';
import {SpecialHeaderModule} from 'special-header';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BalanceComponent,
    InvestmentsLoansComponent,
    CreditCardsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    SpecialHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
