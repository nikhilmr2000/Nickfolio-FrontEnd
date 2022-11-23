import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddportfolioComponent } from './addportfolio/addportfolio.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioIdComponent } from './portfolio-id/portfolio-id.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'addPortfolio',component:AddportfolioComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'logout',component:LogoutComponent},
  {path:'portfolio/:mail',component:PortfolioIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
