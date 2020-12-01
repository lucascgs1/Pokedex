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
  public pagina: number = 1;
  public qtdItem: number = 20;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.load()
  }

  ngOnInit(): void {
    
  }


  load() {
    this.pokemonService.getPokemons()
      .subscribe(
        (result) => {
          console.log(result);
        }
      );
  }



  getPokemons() {
    this.pokemonService.getPokemons(this.pagina, this.qtdItem)
      .subscribe(
        (result) => {
          console.log(result);
        }
      );

  }
}
