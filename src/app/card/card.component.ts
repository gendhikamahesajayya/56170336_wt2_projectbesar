import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Artist } from "../artist";


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() artist: Artist; 
  @Output() detailClickHandler: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detailClicked() {
    this.detailClickHandler.emit(this.artist.id);
  }
}
