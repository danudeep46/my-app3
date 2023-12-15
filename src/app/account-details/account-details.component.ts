import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  public accounts:any={};
  constructor(private _acrivatedRoute:ActivatedRoute, private _accountService:AccountService){
   _acrivatedRoute.params.subscribe(
     (data:any)=>{
       console.log(data.id);
       _accountService.getAccounts(data.id).subscribe(
         (data:any)=>{
           this.accounts=data;
         },
         (err:any)=>{
           alert("Internal Server Error");
         }
       )
     }
   )
  }

}
