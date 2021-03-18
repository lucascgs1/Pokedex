/*model*/
import { Pokemon } from '../../core/model/pokemon';

/*service*/
import { PokemonService } from '../../core/service/pokemon.service';

/*package*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.scss']
})
export class PokemonDetalheComponent implements OnInit {
  public pokemonId = 0;
  public pokemonInfo: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(
        (params) => {
          this.pokemonId = params['id'];

          if (this.pokemonId > 0) {
            this.getPokemonDetalhes(this.pokemonId);
          }
        });
  }


  getPokemonDetalhes(id: number): void {
    console.log(id);
    this.pokemonService.getPokemonDetalhes(id)
      .subscribe(
        (result) => {
          this.pokemonInfo = result;

          this.pokemonService.getFromUrl(this.pokemonInfo.forms[0].url)
            .subscribe(
              (form) => {
                this.pokemonInfo.forms[0].form = form;
              }
            );

          this.pokemonService.getFromUrl(this.pokemonInfo.location_area_encounters)
            .subscribe(
              (location) => {
                this.pokemonInfo.location_area_encounters = location;

                for (const item of this.pokemonInfo.location_area_encounters) {
                  this.pokemonService.getFromUrl(item.location_area.url)
                    .subscribe(
                      (locationEncounter) => {
                        item.location_area.data = locationEncounter;
                      }
                    );

                  for (const version of item.version_details) {
                    for (const encounter of version.encounter_details) {
                      this.pokemonService.getFromUrl(encounter.method.url)
                        .subscribe(
                          (encounterMethod) => {
                            encounter.method.data = encounterMethod;
                          }
                        );
                    }
                  }
                }
              }
            );
        }
      );
  }

  logResult(): void {
  }


  openUrl(url: string): void {
    console.log(url);
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
