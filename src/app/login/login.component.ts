import { JsonPipe } from '@angular/common';
import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';
import { LoginService } from './login.service';

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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  public login:Login;

  user:UserDetails;

  constructor(private service:LoginService,private router:Router) { 
    this.login={} as Login;
    this.user={} as UserDetails;
  }

  ngOnInit(): void {
  }

  loginUsernamePassword(){
    this.service.loginUser(this.login).subscribe((data)=>{
        this.user=JSON.parse(data);
        sessionStorage.setItem('user',JSON.stringify(this.login));
        this.router.navigateByUrl("/dashboard");
    });
    
  }

}
