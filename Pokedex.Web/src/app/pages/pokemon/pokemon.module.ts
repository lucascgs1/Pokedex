//pages
import { IndexComponent } from './index/index.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';

//package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    PokemonDetalheComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
