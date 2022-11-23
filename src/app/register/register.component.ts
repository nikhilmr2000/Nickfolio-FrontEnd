import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

interface Register{
  name:String,
  email:String,
  password:String,
  phoneNumber:String
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input()
  register:Register;
  newPass:String="";

  constructor(private service:RegisterService,private router:Router) {
    this.register={} as Register;
   }

  ngOnInit(): void {
  }

  onRegister(){
    if(this.register.password==this.newPass){
      console.log(this.register.password);
      console.log(this.newPass);
      this.service.registerUser(this.register).subscribe((data)=>{
        this.router.navigateByUrl("/login");
      })
    }
    else{
      alert("Password doesn't Match");
    }
  }


}
