import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { VehicleService } from '../vehicle.service';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  public id:any='';
  public userForm:FormGroup= new FormGroup( {
  name: new FormControl(),
    phone: new FormControl(),
   city: new FormControl(),
    fee: new FormControl(),
    image: new FormControl(),
  
    } );

      constructor(private _userService:UserService,private _actiatedRoute:ActivatedRoute ){
        _actiatedRoute.params.subscribe(
          (data:any)=>{
            this.id=data.id;
            _userService.getUser(data.id).subscribe(
              (data:any)=>{
                this.userForm.patchValue(data);
              },
              (err:any)=>{
                alert("internal error")
              }
            )
          }
        )
      }

    submit(){
      console.log(this.userForm);
    
      if(this.id){
        //edit
        this._userService.editUser(this.id,this.userForm.value).subscribe(
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
        this._userService.createUser(this.userForm.value).subscribe(
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
