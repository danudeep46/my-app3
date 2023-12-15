import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
public bc:string="";
@Input() public ac:string="";
@Output() public bEvent: EventEmitter<any>=new EventEmitter();
send(){
  this.bEvent.emit(this.bc);
}
constructor(){}
}
