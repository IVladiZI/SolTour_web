import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { TouristPlaceComponent } from './tourist-place/tourist-place.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SecurityRouter } from './security/service/security.router';

//Aca estan las rutas q se manejaran en el proyecto
//canActivate validara si esta activa la sesion o no, en caso de q ne enviara al home o ''
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate : [SecurityRouter] },
  { path: 'place', component: TouristPlaceComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers :[SecurityRouter]
})
export class AppRoutingModule { }
