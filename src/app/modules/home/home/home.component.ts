import { Component } from '@angular/core';

import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';
import { IPokedexResult } from 'src/app/core/interfaces/pokedex/pokedex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent {

  public pokedexs: IPokedexResult[];

  constructor(
    private pokedexService: PokedexService,
  ) {
    this.pokedexService.getAll()
      .subscribe((d) => this.pokedexs = d.results);
  }

}
