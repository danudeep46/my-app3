import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student"


    constructor(private _httpClient:HttpClient){}

    getUsers():Observable<any>{
      return this._httpClient.get(this.baseUrl);
    }

    getUser(id:number):Observable<any>{
      return this._httpClient.get(this.baseUrl+"/"+id);
    }
    getFilteredUsers(term:string):Observable<any>{
      return this._httpClient.get(this.baseUrl+"?filter="+term);
    }

    getSortedUsers(column:string,order:string):Observable<any>{
      return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
    }
    getPagedUsers(pageno:number):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=10&page="+pageno);
    }
    deleteUsers(id:string):Observable<any>{
      return this._httpClient.delete(this.baseUrl+"/"+id);
  }


  createUser(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student/",data);
  }
  editUser(id:number,data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}