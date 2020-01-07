import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

import { PokedexService } from 'src/app/core/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.styl']
})
export class PokedexComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap((d) => this.pokedexService.getById(d.id))
      ).subscribe(d => console.log(d.name));
  }

}
