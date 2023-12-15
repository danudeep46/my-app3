import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VehicleService } from '../vehicle.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehiclesComponent {
 
  public vehicle:any=[];
  public or:any="";
  public name:any="";
  public order:any="";
  public pageno:any='';
  
  constructor(private _vehicleService:VehicleService, private _router:Router){
  _vehicleService.getUsers().subscribe(
    (data:any)=>{
      this.vehicle=data;
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
  )
 
}
  getFilteredUsers(){
this._vehicleService.getFilteredUsers(this.or).subscribe(
  (data:any)=>{
    this.vehicle=data;
   
  },
  (err:any)=>{
    alert("error");
  }
)

  }
sort(){
  this._vehicleService.getSortedUsers(this.name,this.order).subscribe(
    (data:any)=>{
   this.vehicle=data;
    },
    (err:any)=>{
    alert("error");
    }
  )
}
page(){
  this._vehicleService.getPagedUsers(this.pageno).subscribe(
    (data:any)=>{
      this.vehicle=data;
    },
    (err:any)=>{
      alert("error");
    }
  )
}
delete(id:string){
  this._vehicleService.deleteUsers(id).subscribe(
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
this._router.navigateByUrl("/dashboard/veh-details/"+id)
}
edit(id:number){
  this._router.navigateByUrl("/dashboard/createveh/"+id)
}
 
}


