import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createveh',
  templateUrl: './createveh.component.html',
  styleUrls: ['./createveh.component.css']
})
export class CreatevehComponent {
  public id:any="";
public vehicleForm:FormGroup=new FormGroup({
  Vehicle:new FormControl(),
  model:new FormControl(),
  type:new FormControl(),
  fuel:new FormControl(),
  color:new FormControl(),
  image:new FormControl(),
 
});
constructor(private _vehicleService:VehicleService, private _activatedroute:ActivatedRoute){
_activatedroute.params.subscribe(
  (data:any)=>{
    this.id=data.id;
    _vehicleService.getveh(data.id).subscribe(
      (data:any)=>{
        this.vehicleForm.patchValue(data);
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
)
}
submit(){
  console.log(this.vehicleForm);

  if(this.id){
    //edit
    this._vehicleService.editvehs(this.id,this.vehicleForm.value).subscribe(
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
    this._vehicleService.createveh(this.vehicleForm.value).subscribe(
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
