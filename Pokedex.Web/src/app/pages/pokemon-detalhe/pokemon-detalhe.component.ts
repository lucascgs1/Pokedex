//page



//service
import { PokemonService } from '../../core/service/pokemon.service';

///package
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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


        this.getPokemonDetalhes();
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


  getPokemonDetalhes() {
    this.pokemonService.getPokemonDetalhes(this.pokemonId)
      .subscribe(
        (result) => {
          this.pokemonInfo = result;
          console.log(this.pokemonInfo);
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
