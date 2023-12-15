import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _commonService:CommonService){
    _commonService.getvalue().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
  }
  public count:number=0;
}
