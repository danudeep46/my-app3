import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  public students: any =[
    {name:'Anudeep',marks:95,grade:'A'},
    {name:'Raju',marks:45,grade:'D'},
    {name:'Amar',marks:75,grade:'B'},
    {name:'Ann',marks:35,grade:'Fail'}

  ]
  

}
