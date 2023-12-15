import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuralDirectivescomponentComponent } from './structural-directivescomponent/structural-directivescomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { AnudeepComponent } from './anudeep/anudeep.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { VehiclesComponent } from './vehicle/vehicle.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BankComponent } from './bank/bank.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentComponent } from './student/student.component';
import { PricePipe } from './price.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
// import { CreatevehiclesComponent } from './createvehicles/createvehicles.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { VehDetailsComponent } from './veh-details/veh-details.component';
import { CreatevehComponent } from './createveh/createveh.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StructuralDirectivescomponentComponent,
    ProductComponent,
    MarksComponent,
    PipesComponent,
    EventComponent,
    CarsComponent,
    ProductsComponent,
    AnudeepComponent,
    UsersComponent,
    AccountsComponent,
    VehiclesComponent,
    FlipkartComponent,
    MailComponent,
    ActivityComponent,
    GalleryComponent,
    BankComponent,
    CreateUserComponent,
    UserFormComponent,
    StudentComponent,
    PricePipe,
    UserDetailsComponent,
    // CreatevehiclesComponent,
    CreateaccountComponent,
    AccountDetailsComponent,
    VehDetailsComponent,
    CreatevehComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
