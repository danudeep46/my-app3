import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventComponent } from './event/event.component';
import { ProductsComponent } from './products/products.component';
import { CarsComponent } from './cars/cars.component';
import { UserService } from './user.service';
import { AnudeepComponent } from './anudeep/anudeep.component';
import { StructuralDirectivescomponentComponent } from './structural-directivescomponent/structural-directivescomponent.component';
import {AccountService } from './account.service';
import { FormsModule } from '@angular/forms';
import { VehiclesComponent } from './vehicle/vehicle.component';

import { UsersComponent } from './users/users.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { AccountsComponent } from './accounts/accounts.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BankComponent } from './bank/bank.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentComponent } from './student/student.component';
import { AuthenticationGuard } from './authentication.guard';
const routes: Routes = [
  {path: 'login', component:LoginComponent},
   {path: '', component:LoginComponent},

  {path:'dashboard', canActivate:[AuthenticationGuard] ,component:DashboardComponent,children:[ 
    {path: 'structuraldirectvies', component:StructuralDirectivescomponentComponent},
    {path:'marks',component:MarksComponent},
    {path:'users',component:UsersComponent},
    {path:'gallery',component:GalleryComponent},
    {path:'account',component:AccountsComponent},
    {path: 'pipes',component:PipesComponent},
    {path:'event',component:EventComponent},
    {path:'car',component:CarsComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'bank',component:BankComponent},
    {path:'vehicle',component:VehiclesComponent},
    {path:'products',component:ProductsComponent},
   {path:'anudeep',component:AnudeepComponent},
   {path:'student',component:StudentComponent},
   {path:'flipkart',component:FlipkartComponent},
   {path:'user-form',component:UserFormComponent},
   {path:'mail',component:MailComponent},
   {path:'activity',component:ActivityComponent},
    {path: 'StructuralDirectives', component:StructuralDirectivescomponentComponent},
]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }