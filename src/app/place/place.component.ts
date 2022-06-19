import { Component, Input, EventEmitter, Output } from "@angular/core";
import { PlaceService } from "../services/place.service";
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent {
  @Input() placeName: string = '';
  @Output() placeClicked = new EventEmitter();
  constructor(private placeService: PlaceService) {

  }
  onClicked() {
    //this.placeClicked.emit();
    this.placeService.deletePlace(this.placeName);
  }


}
