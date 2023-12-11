import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directivescomponent',
  templateUrl: './structural-directivescomponent.component.html',
  styleUrls: ['./structural-directivescomponent.component.css']
})
export class StructuralDirectivescomponentComponent {
  public names : string[]=['anudeep','amar','raju']
  public states: string[]=['andhrapradesh','telangana','delhi','kerala']
  public products :any=[
    {name:'pen',price:30},
    {name:'bag',price:3000},
    {name:'jeans',price:2330}
  ]
  public numb:number=0
  }
  

