import { Component } from '@angular/core';

import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent {

  constructor(
    private pokedexService: PokedexService,
  ) {
    this.pokedexService.getAll()
      .subscribe();
  }

}
