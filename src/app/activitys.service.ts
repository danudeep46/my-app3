import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitysService {

  constructor(private _httpClient:HttpClient) { }

  getUsers():Observable<any>{
    return this._httpClient.get("https://www.boredapi.com/api/activity");
  }
}
