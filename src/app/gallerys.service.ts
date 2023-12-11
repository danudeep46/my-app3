import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GallerysService {

  constructor(private _httpClient:HttpClient) { }

  getUsers():Observable<any>{
    return this._httpClient.get("https://api.imgflip.com/get_memes");
  }
}
