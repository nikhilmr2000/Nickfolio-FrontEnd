import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
interface Users{
  name:String,
  email:String,
  password:String,
  phoneNumber:String,
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:Users;
  constructor(private service:DashboardService) {
    this.user={} as Users;
  }

  ngOnInit(): void {
    this.onDashboardComponent();
  }

  onDashboardComponent(){
    this.service.getDashboardService().subscribe((data)=>{
      this.user=data;
      // console.log(this.user);
    });
  }

}
