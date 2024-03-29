import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { AuthGuard } from './auth.guard';
// import { AuthGuardGuard } from './auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AceComponent } from './creditcard/ace/ace.component';
import { CompareComponent } from './compare/compare.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "apply/:id", component: ApplyFormComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "app", component: AppComponent, pathMatch: "full" },
  { path: "Ace", component: AceComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "compare", component: CompareComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
