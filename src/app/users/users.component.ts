import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users:any=[];
  public term:string="";
  public column:string='';
 public pageno:number=0;
  public order:string='';
  constructor(private _userService:UserService){
  _userService.getUsers().subscribe(
    (data:any)=>{
      this.users=data;
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
  )



 
 
}
getFilteredUsers(){
  this._userService.getFilteredUsers(this.term).subscribe(
    (data:any)=>{
      this.users=data;
    },
    (err:any)=>{
      alert("error");
    }
  )
}

sort(){
  this._userService.getSortedUsers(this.column,this.order).subscribe(
    (data:any)=>{
      this.users=data;
    },
    (err:any)=>{
      alert("error");
    }
  )

}
page(){
  this._userService.getPagedUsers(this.pageno).subscribe(
    (data:any)=>{
      this.users=data;
    },
    (err:any)=>{
      alert("error");
    }
  )
}
delete(id:string){
 this._userService.deleteUser(id).subscribe(
  (data:any)=>{
    alert("deleted")
    location.reload();
  },
  (err:any)=>{
    alert("error");
  }
 )
}


}
