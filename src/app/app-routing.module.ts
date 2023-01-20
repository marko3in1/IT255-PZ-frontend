import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LoginComponent } from './components/login/login.component';
import { SessionAuthGuard } from './services/auth-guard/session.auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate:[SessionAuthGuard] },
  { path: 'create-employee', component: CreateEmployeeComponent, canActivate:[SessionAuthGuard]},
  { path: '', redirectTo: 'employees', pathMatch: 'full', },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate:[SessionAuthGuard] },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent,canActivate:[SessionAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
