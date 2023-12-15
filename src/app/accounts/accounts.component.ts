import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  public account:any=[];
  public ser:any="";
  public Balance:any="";
  public order:any="";
  constructor(private _accountService:AccountService, private _router:Router) { 
    _accountService.getAccount().subscribe(
  (data:any)=>{
  this.account=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  getFilteredAccount(){
    this._accountService.getFilteredAccount(this.ser).subscribe(
      (data:any)=>{
        this.account=data;
      },
      (err:any)=>{
        alert("error")
      }
    )

  }
  sort(){
    this._accountService.getSortAccount(this.Balance,this.order).subscribe(
      (data:any)=>{
        this.account=data;
      },
      (err:any)=>{
        alert("error");
      }
    )
  }
  delete(id:number){
    this._accountService.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("deleted");
        location.reload();
      },
      (err:any)=>{
        alert("error");
      }
    )

  }
  view(id:number){
this._router.navigateByUrl("/dashboard/account-details/"+id);
  }
  edit(id:number){
    this._router.navigateByUrl("/dashboard/createaccount/"+id);
      }
 

}

