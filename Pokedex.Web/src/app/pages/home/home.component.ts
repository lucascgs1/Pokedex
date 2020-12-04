//model
import { Paginacao } from '../../core/model/paginacao';

//service
import { PokemonService } from '../../core/service/pokemon.service';

//package
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pagina: number = 3;
  public qtdItem: number = 20;
  public paginacao: Paginacao = new Paginacao();
  public list: Array<number> = [1, 2, 3];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons(this.pagina);

  }



  getPokemons(page: number) {
    this.pokemonService.getPokemons(page, this.qtdItem)
      .subscribe(
        (result) => {
          this.paginacao = result;
          window.localStorage.setItem("pokemones", JSON.stringify("teste"));
          console.log(JSON.parse(localStorage.getItem("pokemones") || '{}'));
          console.log(this.paginacao);


          this.paginacao.results[0].imgUrl = 'https://pokeres.bastionbot.org/images/pokemon/' + 1 + '.png';
        }
      );
  }

  proximaPagina() {
    this.getPokemons(this.pagina + 1)
  }

}
