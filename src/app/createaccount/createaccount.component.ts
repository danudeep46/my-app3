import { Component, createPlatformFactory } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
public id:any="";
  public accountForm:FormGroup=new FormGroup({
     account_name:new FormControl(),
   available_balance:new FormControl(),
   account_number:new FormControl(),
   city:new FormControl(),
   accountprofie_picture:new FormControl(),
 
  });
  constructor (private _accountService:AccountService,private _actiatedRoute:ActivatedRoute){
   
      _actiatedRoute.params.subscribe(
        (data:any)=>{
          this.id=data.id;
          _accountService.getAccounts(data.id).subscribe(
            (data:any)=>{
              this.accountForm.patchValue(data);
            },
            (err:any)=>{
              alert("internal error")
            }
          )
        }
      )
    }
  
  submit(){
    console.log(this.accountForm);
  
    if(this.id){
      //edit
      this._accountService.editAccount(this.id,this.accountForm.value).subscribe(
        (data:any)=>{
          alert("user data updated");
        },
        (err:any)=>{
          alert("error")
        }
      )
    }
    else{
      //create
      this._accountService.createAccount(this.accountForm.value).subscribe(
        (data:any)=>{
          alert("created data");
        },
        (err:any)=>{
          alert("error");
        }
      )
    }
 

}
}