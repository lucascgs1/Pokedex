//model
import { Pokemon } from '../../core/model/pokemon';

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
          //result.imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + (this.pokemonInfo.id < 9 ? '00' + this.pokemonInfo.id : (this.pokemonInfo.id < 99 ? '0' + this.pokemonInfo.id : this.pokemonInfo.id)) + '.png'

          this.pokemonService.getFromUrl(this.pokemonInfo.forms[0].url)
            .subscribe(
              (form) => {
                this.pokemonInfo.forms[0].form = form
              }
            );

          this.pokemonService.getFromUrl(this.pokemonInfo.location_area_encounters)
            .subscribe(
              (location) => {
                this.pokemonInfo.location_area_encounters = location
              }
            );

          this.pokemonService.getFromUrl(this.pokemonInfo.location_area_encounters)
            .subscribe(
              (location) => {
                this.pokemonInfo.location_area_encounters = location

                //console.log(this.pokemonInfo);
                for (let i = 0; i < this.pokemonInfo.location_area_encounters.length; i++) {
                  this.pokemonService.getFromUrl(this.pokemonInfo.location_area_encounters[i].location_area.url)
                    .subscribe(
                      (locationEncounter) => {
                        this.pokemonInfo.location_area_encounters[i].location_area.data = locationEncounter;
                      }
                    );

                  for (let j = 0; j < this.pokemonInfo.location_area_encounters[i].version_details.length; j++) {
                    for (let k = 0; k < this.pokemonInfo.location_area_encounters[i].version_details[j].encounter_details.length; k++) {
                      this.pokemonService.getFromUrl(this.pokemonInfo.location_area_encounters[i].version_details[j].encounter_details[k].method.url)
                        .subscribe(
                          (encounterMethod) => {
                            this.pokemonInfo.location_area_encounters[i].version_details[j].encounter_details[k].method.data = encounterMethod;
                          }
                        );
                    }
                  }
                }
              }
            );



          console.log(this.pokemonInfo);
          //this.pokemonService.generateJson(this.pokemonInfo);
        }
      );
  }

  logResult() {
  }


  exibirTipoInfo(url: string) {
    console.log(url);
  }

  voltar() {
    this.router.navigate([""])
  }
}
