import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Login{
  username:String,
  password:String
}


interface Education{
  instituteName:String,
  branch:String,
  grade:String
}

interface Projects{
  name:String,
  about:String,
  stack:String
}

interface Acheievements{
  name:String,
  performance:String
}

interface Skills{
  name:String
}

interface PortFolioDetails{
  name:String,
  email:String,
  tag:String,
  description:String,
  contact:String,
  studies:Education[],
  projects:Projects[],
  achievements:Acheievements[],
  skills:Skills[]
}


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  login:Login;
  constructor(private httpClient:HttpClient) { 
    this.login={} as Login;
  }

  getCurrentUserDetails():Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem("user")!);
    const headers=new HttpHeaders({Authorization : 'Basic '+btoa(this.login.username+":"+this.login.password)});
    return this.httpClient.get<any>("https://nickfolio-app.herokuapp.com/currentUser",{headers});
  }
}
