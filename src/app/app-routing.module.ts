import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';

const routes: Routes = [
  {path: '', component:LoginComponent}, 
  {path: 'Sign in', component: SignInComponent}, 
  {path: 'Dashboard', component: DashBoardComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
