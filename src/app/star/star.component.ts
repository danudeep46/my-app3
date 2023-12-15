import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
 @Input() public ratings:number=0;

// //  public sp:any="";
// //  @Output() public bevent:EventEmitter<any>=new EventEmitter();
// //  send(){
// //   this.bevent.emit(this.sp);
//  }
}
