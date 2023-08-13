import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserDetailComponent } from "./pages/users/pages/user-detail/user-detail.component";
import { CursosComponent } from "./pages/cursos/cursos.component";
import { AlumnosComponent } from "./pages/alumnos/alumnos.component";
@NgModule({
 imports:[
 RouterModule.forChild([
 {  
    path: 'home',
    component: HomeComponent,
 },
 {
    path: 'cursos',
    component: CursosComponent, 
 },
 {
    path: 'alumnos',
    component: AlumnosComponent, 
 },
 {
    path: 'users',
    children: [
        {
                    
        path: '',
        component: UsersComponent,
        data: {
          
        }
        },
        {            
        path: ':id',
        component: UserDetailComponent
        }
        ]
 },
 {
    path: '**',
    redirectTo: 'home',
 }
 ]),
            
            
],
exports:[RouterModule]
})
export class DashboardRoutingModule{}