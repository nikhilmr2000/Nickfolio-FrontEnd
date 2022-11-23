import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserDetails{
  name:String,
  email:String,
  password:String,
  phoneNumber:String,
}

interface Login{
  username:String,
  password:String
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  user:UserDetails;
  login:Login;
  
  constructor(private httpClient:HttpClient) { 
    this.user={} as UserDetails;
    this.login={} as Login;
  }

  getDashboardService():Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem("user")!);
    const headers=new HttpHeaders({Authorization : 'Basic '+btoa(this.login.username+":"+this.login.password)});
    return this.httpClient.get<any>("https://nickfolio-app.herokuapp.com/portFolio",{headers});
  }

}
