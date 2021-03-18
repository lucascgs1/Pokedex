/*model*/
import { Paginacao } from '../../core/model/paginacao';
import { PokedexObj } from '../../core/model/pokedex';

/*service*/
import { PokemonService } from '../../core/service/pokemon.service';

/*package*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public pagina = 1;
  public qtdItem = 20;
  public paginacao: PokedexObj = new PokedexObj();
  public urlImageBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemons(this.pagina);

  }

  getPokemons(page: number): void {
    this.pokemonService.getAllPokemons()
      .subscribe(
        (result) => {
          this.paginacao = result;

          for (const item of this.paginacao.pokemon_entries) {
            item.pokemon_species.imgUrl = this.urlImageBase + item.entry_number + '.png';
          }
        }
      );
  }

  proximaPagina(): void {
    this.getPokemons(this.pagina + 1);
  }

  detalhesPokemon(id: number): void {
    this.router.navigate(['/pokemon-detalhe/' + id]);
  }

}
