import { Component } from '@angular/core';

@Component({
  selector: 'app-anudeep',
  templateUrl: './anudeep.component.html',
  styleUrls: ['./anudeep.component.css']
})
export class AnudeepComponent {
  public Products:any=[
    {sno:1,name:'anu',price:25,rating:4.3,freedelivery:'yes'},
    {sno:2,name:'anu',price:25,rating:4.3,freedelivery:'yes'}
  ];
  public  name:string=''
  public price:number=0;
  public rating:number=0;
  public freedelivery:boolean=false;
  Addtocart() {
    
    let item1 = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      freedelivery: this.freedelivery,
    };

    this.Products.push(item1);

   
  }
}