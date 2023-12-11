import { Component } from '@angular/core';
import { FlipkartsService } from '../flipkarts.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public flipkart:any=[];
  constructor(private _flipkartService:FlipkartsService){
    _flipkartService.getUsers().subscribe(
      (data:any)=>{
        this.flipkart=data;
      },
      (err:any)=>{
        alert("internal error")
      }
    )
  }
  

}
