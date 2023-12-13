import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  public user:any={};
 constructor(private _acrivatedRoute: ActivatedRoute, private _userService:UserService){
  _acrivatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      _userService.getUser(data.id).subscribe(
        (data:any)=>{
          this.user=data;
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
    }
  )
 }
}
