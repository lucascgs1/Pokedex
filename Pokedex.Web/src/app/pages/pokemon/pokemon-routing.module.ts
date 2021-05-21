//pages
import { IndexComponent } from './index/index.component';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';

//package
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'detalhe/:id',
    component: PokemonDetalheComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokemonRoutingModule { }
