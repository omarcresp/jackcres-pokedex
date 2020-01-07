import { NgModule } from '@angular/core';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokedexComponent } from './pokedex/pokedex.component';

@NgModule({
  declarations: [
    PokedexComponent
  ],
  imports: [
    SharedModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
