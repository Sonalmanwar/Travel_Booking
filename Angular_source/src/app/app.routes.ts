import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TrainComponent } from './train/train.component';
import { BusComponent } from './bus/bus.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home

    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },

    { path: 'register', component: RegisterComponent },

    { path: 'train', component: TrainComponent },
    { path: '', redirectTo: '/train', pathMatch: 'full' }, // Redirect to train page by default

    { path: 'bus', component: BusComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }


  