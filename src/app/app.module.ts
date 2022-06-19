import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'
import { TouristPlaceComponent } from './tourist_place/touristPlace.component'
import { PlaceComponent } from './place/place.component'
import { PlaceService } from './services/place.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TouristPlaceComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
