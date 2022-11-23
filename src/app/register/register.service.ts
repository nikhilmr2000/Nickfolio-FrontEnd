import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
interface Register{
  name:String,
  email:String,
  password:String,
  phoneNumber:String
}
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerUser(register:Register):Observable<Register>{
    return this.http.post<any>("https://nickfolio-app.herokuapp.com/register",register);
  }

}
