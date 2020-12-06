//page



//service
import { PokemonService } from '../../core/service/pokemon.service';

///package
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../core/model/pokemon'; 


@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.scss']
})
export class PokemonDetalheComponent implements OnInit {

  public pokemonId: number = 0;
  public pokemonInfo: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
  ) {
    console.log(this.pokemonInfo);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.pokemonId = params["id"];


        this.getPokemonDetalhes(this.pokemonId);
        console.log(this.pokemonId);
        //if (this.orcamentoId > 0)
        //  this.getOrcamento(null);
        //else {
        //  console.error("Orçamento não informado!");
        //  this.navCtrl.back();
        //  return;
        //}
      });
  }


  getPokemonDetalhes(id: number) {
    console.log(id);
    this.pokemonService.getPokemonDetalhes(id)
      .subscribe(
        (result) => {
          this.pokemonInfo = result;
          console.log(this.pokemonInfo);
          this.pokemonInfo.imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + (this.pokemonInfo.id < 9 ? '00' + this.pokemonInfo.id : (this.pokemonInfo.id < 99 ? '0' + this.pokemonInfo.id : this.pokemonInfo.id )) + '.png'
        }

      );


  }

  exibirTipoInfo(url: string) {
    console.log(url);

  }

  voltar() {
    this.router.navigate([""])
  }
}
