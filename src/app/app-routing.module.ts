import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardCreateComponent} from "./components/cards/card-create/card-create.component";
import {CardUpdateComponent} from "./components/cards/card-update/card-update.component";
import {CardReadComponent} from "./components/cards/card-read/card-read.component";
import {CardDeleteComponent} from "./components/cards/card-delete/card-delete.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'criarCard', // path do caminho que desejamos que inicie a aplicação
    pathMatch: 'full'
  },
  {
    path: 'criarCard',
    component: CardCreateComponent
  },
  {
    path: 'editarCard',
    component: CardUpdateComponent
  },
  {
    path: 'exibirCard',
    component: CardReadComponent
  },
  {
    path: 'deletarCard',
    component: CardDeleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
