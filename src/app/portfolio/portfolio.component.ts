import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
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

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:PortFolioDetails;

  constructor(private service:PortfolioService) { 
    this.portfolio={} as PortFolioDetails;
  }

  ngOnInit(): void {
    this.getValues();
  }

  getValues(){
    this.service.getCurrentUserDetails().subscribe((data)=>{
      this.portfolio=data;
    });
  }

}
