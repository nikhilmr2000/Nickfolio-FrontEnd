import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
export class PortfolioIdService {

  constructor(private httpClient:HttpClient) { }

  clientServiceModule(mail:String):Observable<any>{
    return this.httpClient.get<any>("https://nickfolio-app.herokuapp.com/portFolio/portfolioDetails/"+mail);
  }
}
