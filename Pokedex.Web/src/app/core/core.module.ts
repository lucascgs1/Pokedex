//service
import { PokemonService } from './service/pokemon.service';
import { StorageService } from './service/storage.service';

//package
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    PokemonService,
    StorageService
  ]
})

export class CoreModule { }
