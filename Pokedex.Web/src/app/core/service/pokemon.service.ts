//model
import { Paginacao } from '../model/paginacao';
import { Pokemon } from '../model/pokemon';
import { PokedexObj } from '../model/pokedex';

//module
import { environment } from '../../../environments/environment';

//service
import { StorageService } from './storage.service';

//package
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { saveAs } from 'file-saver';

export class ResultApi {
  constructor() {
    this.sucesso = false;
    this.message = '';
    this.error = '';
  }
  data: any;
  sucesso: boolean;
  message: string;
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os pokemons
  getPokemons(page: number = 0, limit: number = 0): Observable<Paginacao> {
    var url = environment.endPoints.Pokemon;

    if (limit > 0 && page > 0) {
      url = url + '?offset=' + ((page * limit) - limit) + '&limit=' + limit;
    }
    return this.httpClient.get<Paginacao>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getAllPokemons(tipo: number = 1): Observable<PokedexObj> {

    var url = environment.endPoints.Pokedex + tipo;


    console.log(url);

    return this.httpClient.get<PokedexObj>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  //detalhes do pokemon
  getPokemonDetalhes(id: number): Observable<Pokemon> {

    var url = environment.endPoints.Pokemon + id;

    console.log(url)

    return this.httpClient.get<Pokemon>(url)
      .pipe(
        retry(2),
        catchError(this.handleError));

  }

  getFromUrl(url: string): Observable<any> {
    console.debug(url)
    return this.httpClient.get<any>(url)
      .pipe(
        retry(2),
        catchError(this.handleError));

  }



  //public handleSuccessMessages(message: Response, cacheKey: string = '', cacheAge?: number): ResultApi {
  //  let result: ResultApi = message.json();

  //  if (result.sucesso) {
  //    if (cache)
  //      this.storageService.setData(cacheKey, result);

  //    return result;
  //  }

  //  return result;
  //}





  generateJson(teste: any): void {
    const blob = new Blob([JSON.stringify(teste)], { type: 'application/json' });

    debugger;;

    saveAs(blob, 'abc.json');
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
