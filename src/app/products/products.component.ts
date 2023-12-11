import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public result:number=0;
  public result1:number=0;
  public search:string=''


  public Products:any=[];

  Addtocart() {
    
    let item1 = {
      name: this.name,
      price: this.price,
      rating: this.rating,
      freedelivery: this.freedelivery,
    };

    this.Products.push(item1);

   
  }

  delete(i:number){
this.Products.splice(i,1)
  }
  anud(){
    var si =  this.Products.filter((l:any)=>l.name.includes(this.search))
    this.Products = si;
  }

  showOnlyFreeDelivery(){
      var fd=this.Products.filter((q:any)=>q.freedelivery=='yes')
    this.Products=fd;
  }

  lowtohigh(){
    this.Products=this.Products.sort(this.Products=(a:any,b:any)=>(a.price-b.price))
  }

  hightolow(){
    this.Products=this.Products.sort(this.Products=(a:any,b:any)=>(b.price-a.price))
  }

  ratinghightolow(){
    this.Products=this.Products.sort(this.Products=(a:any,b:any)=>(a.rating-b.rating))
  }

  ratinglowtohigh(){
    this.Products=this.Products.sort(this.Products=(a:any,b:any)=>(b.rating-a.rating))
  }

  discount(){
    this.Products=this.Products.map(this.Products=(a:any)=>{
      a.price=a.price/2;
      return a;
    })
  }

  pricewithdelivery(){
    this.Products=this.Products.map(this.Products=(a:any)=>{
      a.price=a.price+20;
      return a;
    })
  }

  totalprice(){
this.result = this.Products.reduce((sum:any, a:any)=> sum+a.price,0)    
    alert(this.result)
  
  }
  
  Totalcartitems(){
    this.result1 =  this.Products=this.Products.length
    alert(this.result1)
  }


 
  public  name:string=''
  public price:number=0;
  public rating:number=0;
  public freedelivery:boolean=false;
 
}
