import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserDetailComponent } from './dashboard/pages/users/pages/user-detail/user-detail.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';

const routes: Routes = [
{
  path: 'dashboard',
  component: DashboardComponent,
  loadChildren: ()=> import('./dashboard/dashboard.module').then((typescriptModule)=>typescriptModule.DashboardModule)
},
{ 
  path: 'auth',
  component: AuthComponent,
  loadChildren: ()=>import('./auth/auth.module').then((typescriptModule)=>typescriptModule.AuthModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
