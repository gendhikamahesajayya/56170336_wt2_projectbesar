import { Component, OnInit } from "@angular/core";
import { Artist } from "../artist";
import { ArtistService } from "../artist.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  artists: Array<Artist>;
  

  constructor(private artistService: ArtistService, private router: Router) {}

  ngOnInit(): void {
    this.artistService
      .getArtists()
      .subscribe(artists => (this.artists = artists));
  }

  goToDetail(id: number) {
    this.router.navigate(["/artist", id]);
  }
}
