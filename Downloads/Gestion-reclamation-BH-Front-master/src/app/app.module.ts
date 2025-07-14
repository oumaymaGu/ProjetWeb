import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserReclamationComponent } from './user/add-user-reclamation/add-user-reclamation.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListUserReclamationComponent } from './user/list-user-reclamation/list-user-reclamation.component';
import { ListAdminReclamtionComponent } from './admin/list-admin-reclamtion/list-admin-reclamtion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';






@NgModule({
  declarations: [
    AppComponent,
    AddUserReclamationComponent,
    LoginComponent,
    RegisterComponent,
    ListUserReclamationComponent,
    ListAdminReclamtionComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // indispensable
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
