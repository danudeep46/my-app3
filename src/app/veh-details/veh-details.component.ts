import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-veh-details',
  templateUrl: './veh-details.component.html',
  styleUrls: ['./veh-details.component.css']
})
export class VehDetailsComponent {
  public vehicles:any="";
  constructor(private _activatedroute:ActivatedRoute, private _vehicleService:VehicleService){
    _activatedroute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _vehicleService.getveh(data.id).subscribe(
          (data:any)=>{
            this.vehicles=data;
      },
      (err:any)=>{
        alert("error")
      }
        )
  }
    )
  }
}
