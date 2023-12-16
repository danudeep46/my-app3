import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPaymentsComponent } from './card-payments/card-payments.component';
import { UpiPaymentsComponent } from './upi-payments/upi-payments.component';
import { NetPaymentsComponent } from './net-payments/net-payments.component';
const routes: Routes = [
  {path:"",component:UpiPaymentsComponent},
  {path:"upi-payments",component:UpiPaymentsComponent},
  {path:"net-payments",component:NetPaymentsComponent},
  {path:"card-payments",component:CardPaymentsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
