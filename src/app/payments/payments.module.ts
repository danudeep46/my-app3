import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { UpiPaymentsComponent } from './upi-payments/upi-payments.component';
import { NetPaymentsComponent } from './net-payments/net-payments.component';
import { CardPaymentsComponent } from './card-payments/card-payments.component';


@NgModule({
  declarations: [
    UpiPaymentsComponent,
    NetPaymentsComponent,
    CardPaymentsComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
