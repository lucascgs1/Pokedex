//model
import { Paginacao } from '../model/paginacao';

//package
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

  // Obtem todos os carros
  getPokemons(page: number = 0, limit: number = 0): Observable<Paginacao> {

    var url = this.url;

    console.log(page, limit);

    if (limit > 0) {
      url = url + '?limit=' + limit;
    }
    if (limit > 0 && page > 0) {
      url = url + '?offset=' + page * limit;
    }

    return this.httpClient.get<Paginacao>(url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um carro pelo id
  //getCarById(id: number): Observable<Car> {
  //  return this.httpClient.get<Car>(this.url + '/' + id)
  //    .pipe(
  //      retry(2),
  //      catchError(this.handleError)
  //    )
  //}


  



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
