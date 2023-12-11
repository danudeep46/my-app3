import { Component } from '@angular/core';
import { BanksService } from '../banks.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent {
  public bank:any=[];
  constructor(private _bankService:BanksService){
    _bankService.getusers().subscribe(
      (data:any)=>{
        this.bank=data.users;
      },
      (err:any)=>{
        alert("error")
      }
    )
  }

}
