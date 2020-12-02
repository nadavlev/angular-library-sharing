import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForgotPasswordComponent, LoginComponent, RegisterComponent} from 'login';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BalanceComponent} from './balance/balance.component';
import {InvestmentsLoansComponent} from './investments-loans/investments-loans.component';
import {CreditCardsComponent} from './credit-cards/credit-cards.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'investments-loans', component: InvestmentsLoansComponent},
  {path: 'credit-cards', component: CreditCardsComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
