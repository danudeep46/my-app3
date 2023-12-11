import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { VehicleService } from '../vehicle.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public userForm:FormGroup= new FormGroup( {
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  
    } );

      constructor(private _accountService:AccountService){}

    submit(){
      console.log(this.userForm);
    
    this._accountService.createUser(this.userForm.value).subscribe(
      (data:any)=>{
        alert("created data");
      },
      (err:any)=>{
        alert("error");
      }
    )

}
}
