import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPokedexData } from '../../interfaces/pokedex/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.buildPath();
  }

  getAll(): Observable<IPokedexData> {
    return <Observable<IPokedexData>>this.http.get(this.url);
  }

  buildPath(): void {
    this.url = 'https://pokeapi.co/api/v2/pokedex';
  }

}
