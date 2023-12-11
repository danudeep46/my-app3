import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public name = 'Anudeep';

  public courseID=123

  public alert =0;
  public data='';

  onclick(){
    this.alert +=2
  }
  click(){
    this.data='';
  }
  public num1: number=0;
  public num2: number=0;
  public result:number=0;
  sum(){
    this.result=this.num1+this.num2
  }
  public num11: number=0;
  public num22: number=0;
  public result1:number=0;
  public result2:number=0;

  area(){
    this.result1=this.num11*this.num22
  }
  per(){
    
    this.result2=2*(this.num11+this.num22)
  }

   public num111: number=0;
  public num222: number=0;
  public result11:number=0;
  public result22:number=0;

  area1(){
    this.result11=3.14*this.num111*this.num111
  }
  per1(){
    
    this.result22=2*3.14*this.num111
  }
  
  public num8: number=0;
  public num9: number=0;
  public result7:number=0;


  cal(){
    this.result7=this.num9/((this.num8/100)*this.num8/100)
  }

}
