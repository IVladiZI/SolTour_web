import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { PlaceService } from "../services/place.service";

@Component({
  selector: 'app-touristPlace',
  templateUrl: './touristPlace.component.html'
})

export class TouristPlaceComponent implements OnInit, OnDestroy {
  places: string[] = [];
  constructor(private placesService: PlaceService) { }
  private placeSuscription = new Subscription();


  deletePlace(place: string) {

  }
  savePlace(f: NgForm) {
    if (f.valid) {
      this.placesService.addPlace(f.value.namePlace)
    }
  }
  ngOnInit(): void {
    this.places = this.placesService.getPlaces();
    this.placeSuscription = this.placesService.placeSubject.subscribe(data => {
      this.places = this.placesService.getPlaces();
      console.log(data)
    });
  }
  ngOnDestroy(): void {
    this.placeSuscription.unsubscribe();
  }
}
