//page
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

//module
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

//package
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetalheComponent } from './pages/pokemon-detalhe/pokemon-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
