import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';
import { TouristPlaceComponent } from './tourist_place/touristPlace.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'place', component: TouristPlaceComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
