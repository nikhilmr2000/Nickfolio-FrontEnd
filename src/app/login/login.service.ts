import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Login{
  username:String,
  password:String
}
interface UserDetails{
  name:String,
  email:String,
  password:String,
  phoneNumber:String,
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  loginUser(login:Login):Observable<any>{
    const headers=new HttpHeaders({Authorization :'Basic ' +btoa(login.username+":"+login.password)});
    return this.httpClient.get<any>("https://nickfolio-app.herokuapp.com/portFolio",{headers,responseType:'text' as 'json'});
  }
}
