import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface User{
  name:String,
  email:String,
  password:String,
  phoneNumber:String,
  authority:Authority
}

interface Authority{
  name:String
}

@Injectable({
  providedIn: 'root'
})
export class PortfoliointerceptorService {
    constructor(){

    }

}
