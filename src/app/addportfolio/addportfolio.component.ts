import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddportfolioService } from './addportfolio.service';

interface Studies{
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
  studies:Studies[],
  projects:Projects[],
  achievements:Acheievements[],
  skills:Skills[]
}

interface UserDetails{
  name:String,
  email:String,
  password:String,
  phoneNumber:String,
}


@Component({
  selector: 'app-addportfolio',
  templateUrl: './addportfolio.component.html',
  styleUrls: ['./addportfolio.component.css']
})
export class AddportfolioComponent implements OnInit {

  //portfolio
  portfolioDetails:PortFolioDetails;

  //Saved PortFolio Details
  savedPortFolio:PortFolioDetails;

  //PresentOrNot
  present:boolean=false;
  presentornot:PortFolioDetails;

  //Education
  total:number=1;
//  record:Studies;
  education:Studies[]=[];
  count:number[]=[0];
  
  //Projects
  total1:number=1;
 // record1:Projects;
  project:Projects[]=[];
  count1:number[]=[0];

  //Achievement
  total2:number=1;
 // record2:Achievement;
 achievements:Acheievements[]=[];
  count2:number[]=[0];

  //Skills
  total3:number=1;
 // record3:Skills;
  skills:Skills[]=[];
  count3:number[]=[0];

  //login
  user:UserDetails;

  constructor(private service: AddportfolioService,private router:Router){
    this.portfolioDetails={} as PortFolioDetails;
    this.user={} as UserDetails;
    this.presentornot={} as PortFolioDetails;
    this.savedPortFolio={} as PortFolioDetails;
   }

  ngOnInit(): void {
    this.education[0]={"instituteName":"","branch":"","grade":""};
    this.project[0]={"name":"","about":"","stack":""};
    this.achievements[0]={"name":"","performance":""};
    this.skills[0]={"name":""};
    this.onDash();
    this.presentOrNot();
  }

  onClickButton(){
    this.total++;
    this.education[this.total-1]={"instituteName":"","branch":"","grade":""};
    if(this.education[this.total-1].instituteName!="" && this.education[this.total-1].branch!="" && this.education[this.total-1].grade!=""){
      this.education.push(this.education[this.total-1]);
    }

    this.education.length=this.total;
    for(let i=0;i<this.education.length;i++){
      this.count[i]=i;
    }

   // console.log(this.education);
  }

  deleteButton(educ:number){
    if(this.total>0){
      this.total--;
      this.count.splice(educ,1);
      this.education.splice(educ,1);
      this.count.length=this.total;
      this.education.length=this.count.length;
     // console.log(this.education.length);
      //console.log(this.education);
    }
  }


  onClickButton1(){
    this.total1++;
   //this.project.push(this.record1);
   this.project[this.total1-1]={"name":"","about":"","stack":""};
   if(this.project[this.total1-1].name!="" && this.project[this.total1-1].about!="" && this.project[this.total1-1].stack!=""){
    this.project.push(this.project[this.total1-1]);
   }
    this.project.length=this.total1;

    for(let i=0;i<this.project.length;i++){
      this.count1[i]=i;
    }

  //  console.log(this.total1);
   // console.log(this.project);
  }

  deleteButton1(educ:number){
    if(this.total1>0){
      this.total1--;
      console.log("Sliced Element : "+this.count1[educ]);
      this.count1.splice(educ,1);
      this.project.splice(educ,1);
      this.count1.length=this.total1;
      this.project.length=this.count1.length;
    //  console.log(this.project.length);
    //  console.log(this.project);
    }
  }

  onClickButton2(){
    this.total2++;
   // this.ach.push(this.record2);
    this.achievements[this.total2-1]={"name":"","performance":""};
    if(this.achievements[this.total2-1].name!="" && this.achievements[this.total2-1].performance!=""){
      this.achievements.push(this.achievements[this.total2-1]);
    }
    this.achievements.length=this.total2;
  

    for(let i=0;i<this.achievements.length;i++){
      this.count2[i]=i;
    }

   // console.log(this.total2);
   // console.log(this.achievements);
  }

  deleteButton2(educ:number){
    if(this.total2>0){
      this.total2--;
      console.log("Element: "+educ);
      this.count2.splice(educ,1);
      this.achievements.splice(educ,1);
      this.count2.length=this.total2;
      this.achievements.length=this.count2.length;
    //  console.log("Array: "+ this.count2);
    //  console.log(this.achievements);
    }
  }

  onClickButton3(){
    this.total3++;
   // this.skills.push(this.record3);
    this.skills[this.total3-1]={"name":""};
    if(this.skills[this.total3-1].name!=""){
      this.skills.push(this.skills[this.total3-1]);
    }
    this.skills.length=this.total3;
  

    for(let i=0;i<this.skills.length;i++){
      this.count3[i]=i;
    }

   // console.log(this.total3);
   // console.log(this.skills);
  }

  deleteButton3(educ:number){
    if(this.total3>0){
      this.total3--;
      console.log("Element: "+educ);
      this.count3.splice(educ,1);
      this.skills.splice(educ,1);
      this.count3.length=this.total3;
      this.skills.length=this.count3.length;
     // console.log("Array: "+ this.count3);
     // console.log(this.skills);
    }
  }

  onClick(){
    console.log(this.achievements);
    this.portfolioDetails.studies=this.education;
    this.portfolioDetails.projects=this.project;
    this.portfolioDetails.achievements=this.achievements;
    this.portfolioDetails.skills=this.skills;
    this.service.addPortFolioDetails(this.portfolioDetails).subscribe((data)=>{
      //  console.log(data);
        this.router.navigateByUrl("/portfolio");
    });
  }

  onUpdate(){
    this.savedPortFolio.studies=this.education;
    this.savedPortFolio.projects=this.project;
    this.savedPortFolio.achievements=this.achievements;
    this.savedPortFolio.skills=this.skills;
    this.service.updatePortFolioDetails(this.savedPortFolio).subscribe((data)=>{
     // console.log(data);
      this.router.navigateByUrl("/portfolio");
    });
  }

  onDash(){
    this.service.getDashboardService().subscribe((data)=>{
      this.user=data;
    });
  }

  presentOrNot(){
    this.service.getPortValueDetails().subscribe((data)=>{
      this.savedPortFolio=data;
      this.presentornot=data;
      if(this.presentornot.email!=null){
        this.present=true;
      //  console.log("Present "+this.present);
      }
    });
  }


}
