import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistromotoComponent } from './pages/registromoto/registromoto.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistromComponent } from './pages/registrom/registrom.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'registrom/:id' , component: RegistromComponent, canActivate:[AuthGuard]},
  { path: 'moto' ,component: RegistromotoComponent, canActivate:[AuthGuard]},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
