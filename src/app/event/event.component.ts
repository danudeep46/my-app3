import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public tex:string='';
   public names:string[]=[];
  submit(){
    this.names.push(this.tex)
    this.tex=""
  
  }
  del(){
  this.names.pop()
  
}
}
