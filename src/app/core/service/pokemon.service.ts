//model
import { Paginacao } from '../model/paginacao';

//module
import { environment } from '../../../environments/environment';

//package
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public url: string = environment.endPoints.ApiPokemon + 'pokemon/';

  constructor(
    private httpClient: HttpClient
  ) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os pokemons
  getPokemons(page: number = 0, limit: number = 0): Observable<Paginacao> {

    var url = this.url;

    console.log(page, limit);

    if (limit > 0 && page > 0) {
      url = url + '?offset=' + ((page * limit) - limit) + '&limit=' + limit;
    }
    console.log(url);

    return this.httpClient.get<Paginacao>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //detalhes do pokemon
  getPokemonDetalhes(): Observable<Paginacao> {

    var url = this.url;

   
    return this.httpClient.get<Paginacao>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }






  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
