import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserReclamationComponent } from './user/add-user-reclamation/add-user-reclamation.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListUserReclamationComponent } from './user/list-user-reclamation/list-user-reclamation.component';
import { ListAdminReclamtionComponent } from './admin/list-admin-reclamtion/list-admin-reclamtion.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

const routes: Routes = [
  { path: 'add-user-reclamation', component: AddUserReclamationComponent,},
  { path: 'list-user-reclamation', component: ListUserReclamationComponent,  },
  { path: 'list-admin-reclamation', component: ListAdminReclamtionComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
