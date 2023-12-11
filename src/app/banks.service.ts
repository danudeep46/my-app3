import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(private _httpclient:HttpClient) { }
  getusers():Observable<any>{
    return this._httpclient.get("https://dummyjson.com/users")
  }
}
