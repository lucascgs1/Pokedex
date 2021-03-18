/*page*/
import { HomeComponent } from './pages/home/home.component';
import { PokemonDetalheComponent } from './pages/pokemon-detalhe/pokemon-detalhe.component';

/*package*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pokemon-detalhe/:id',
    component: PokemonDetalheComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
