import { Component } from '@angular/core';
import { ActivitysService } from '../activitys.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
  
  public borde:any=[];
  
  constructor(private _activityService:ActivitysService){
  _activityService.getUsers().subscribe(
    (data:any)=>{
      this.borde=data;
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
  )
  
    
  }
  refresh(){
    this._activityService.
    getUsers().subscribe(
      (data:any)=>
      {
        this.borde=data;
      },
      (error:any)=>{
        alert("internal server  error");
      }
    )
 
}

}
