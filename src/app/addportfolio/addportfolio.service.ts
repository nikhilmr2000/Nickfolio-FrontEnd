import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

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
export class AddportfolioService {

  login:Login;
  constructor(private httpClient:HttpClient) {
    this.login={} as Login;
   }

  addPortFolioDetails(portfolio:PortFolioDetails):Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem("user")!);
    const headers=new HttpHeaders({Authorization : 'Basic '+btoa(this.login.username+":"+this.login.password)});
    return this.httpClient.post<any>("https://nickfolio-app.herokuapp.com/portFolio/portfolioDetails",portfolio,{headers,responseType: 'text' as 'json'});
  }

  updatePortFolioDetails(portfolio:PortFolioDetails):Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem("user")!);
    const headers=new HttpHeaders({Authorization : 'Basic '+btoa(this.login.username+":"+this.login.password)});
    return this.httpClient.put<any>("https://nickfolio-app.herokuapp.com/portFolio/portfolioDetails",portfolio,{headers,responseType: 'text' as 'json'});
  }

  getPortValueDetails():Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem("user")!);
    const headers=new HttpHeaders({Authorization : 'Basic '+btoa(this.login.username+":"+this.login.password)});
    return this.httpClient.get<any>("https://nickfolio-app.herokuapp.com/getPortDetails",{headers});
  }

  getDashboardService():Observable<any>{
    this.login=JSON.parse(sessionStorage.getItem("user")!);
    const headers=new HttpHeaders({Authorization : 'Basic '+btoa(this.login.username+":"+this.login.password)});
    return this.httpClient.get<any>("https://nickfolio-app.herokuapp.com/portFolio",{headers});
  }
}
