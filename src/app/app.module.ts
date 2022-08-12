import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component'
import { TouristPlaceComponent } from './tourist-place/tourist-place.component'
import { PlaceComponent } from './place/place.component'
import { PlaceService } from './services/place.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ToolBarComponent } from './navigation/tool-bar/tool-bar.component';
import { MenuListComponent } from './navigation/menu-list/menu-list.component';
import { SecurityService } from './security/service/security.service';
import { PlacesComponent } from './places/places.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TouristPlaceComponent,
    PlaceComponent,
    RegisterComponent,
    LoginComponent,
    ToolBarComponent,
    MenuListComponent,
    PlacesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [PlaceService,SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
