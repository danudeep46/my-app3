import { Component } from '@angular/core';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

public mails:any=[];
  
  constructor(private _mailService:MailsService){
  _mailService.getUsers().subscribe(
    (data:any)=>{
      this.mails=data;
    },
    (err:any)=>{
      alert("Internal Server Error");
    }
  )
  }
}