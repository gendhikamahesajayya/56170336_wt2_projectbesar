import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistService } from "../artist.service";
import { Artist } from "../artist";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./detail-artist.component.html",
  styleUrls: ["./detail-artist.component.scss"]
})
export class DetailArtistComponent implements OnInit {
  artist: Artist; 
  constructor(
    private route: ActivatedRoute,
    private pokemonService: ArtistService 
  ) {}

  ngOnInit(): void {
    this.artist = null;//artist
    this.route.paramMap.subscribe(param => {
      this.artist = this.pokemonService.getArtist(+param.get("id"));
    });
  }
}
