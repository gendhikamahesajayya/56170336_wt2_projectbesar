import { Injectable } from "@angular/core";
import { ARTIST } from "./artistdata";
import { Observable, of } from "rxjs";
import {  Artist } from "./artist";

@Injectable({
  providedIn: "root"
})
export class ArtistService {
  private artist: Array<Artist> = ARTIST;
  constructor() {}

  getArtists(): Observable<Artist[]> {
    return of(this.artist);
  }

  getArtist(id: number): Artist {
    return this.artist.find(artist => (artist.id === id));
  }
}
