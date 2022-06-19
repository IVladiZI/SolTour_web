import { Subject } from "rxjs";
export class PlaceService {
  placeSubject = new Subject();
  private places = ['Coroico', 'Puerto Perez', 'Valle de la Luna'];

  getPlaces() {
    return [...this.places];
  }
  addPlace(namePlace: string) {
    this.places.push(namePlace);
    this.placeSubject.next(this.places);
  }
  deletePlace(namePlace: string){
    this.places = this.places.filter(p=>p!==namePlace);
    this.placeSubject.next(this.places);
  }


}
