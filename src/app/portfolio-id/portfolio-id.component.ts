import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioIdService } from './portfolio-id.service';
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
  selector: 'app-portfolio-id',
  templateUrl: './portfolio-id.component.html',
  styleUrls: ['./portfolio-id.component.css']
})
export class PortfolioIdComponent implements OnInit {
  portfolio:PortFolioDetails;
  mail:any;

  constructor(private service:PortfolioIdService,private route:ActivatedRoute) { 
    this.portfolio={} as PortFolioDetails;
  }

  ngOnInit(): void {
    this.getMailDetailsPortfolio();
  }

  getMailDetailsPortfolio(){
    this.mail = this.route.snapshot.paramMap.get('mail');
    this.service.clientServiceModule(this.mail).subscribe((data)=>{
      this.portfolio=data;
      //console.log(this.portfolio);
    });
  }

}
