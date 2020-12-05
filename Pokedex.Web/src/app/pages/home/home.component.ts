//model
import { Paginacao } from '../../core/model/paginacao';

//service
import { PokemonService } from '../../core/service/pokemon.service';

//package
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pagina: number = 1;
  public qtdItem: number = 20;
  public paginacao: Paginacao = new Paginacao();

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemons(this.pagina);

  }

  getPokemons(page: number) {
    this.pokemonService.getPokemons(page, this.qtdItem)
      .subscribe(
        (result) => {
          this.paginacao = result;

          for (var i = 0; i < this.paginacao.results.length; i++) {
            var urlDividida = this.paginacao.results[i].url.split('/');

            this.paginacao.results[i].idPokemon = Number(urlDividida[urlDividida.length - 2]);
            this.paginacao.results[i].imgUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + this.paginacao.results[i].idPokemon + '.png';
          }


          console.log(this.paginacao);


        }
      );
  }

  proximaPagina() {
    this.getPokemons(this.pagina + 1)
  }

  detalhesPokemon(id: number) {
    this.router.navigate(["/pokemon-detalhe/" + id])
  }

}
