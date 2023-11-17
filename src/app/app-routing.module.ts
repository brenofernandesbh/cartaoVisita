import {createComponent, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreateComponent } from "./components/cards/card-create/card-create.component";
import { CardUpdateComponent } from "./components/cards/card-update/card-update.component";
import { CardReadComponent } from "./components/cards/card-read/card-read.component";
import { CardDeleteComponent } from "./components/cards/card-delete/card-delete.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'readCard', // path do caminho que desejamos que inicie a aplicação
    pathMatch: 'full'
  },
  {
    path: 'createCard', // 'criarCard' 'createCard'
    component: CardCreateComponent
  },
  {
    path: 'cards/updateCard/:id', // 'cards/editarCard/:id'  'cards/updateCard/:id'
    component: CardUpdateComponent
  },
  {
    path: 'readCard', //'exibirCard' 'readCard'
    component: CardReadComponent
  },
  {
    path: 'cards/deleteCard/:id',  // 'cards/excluirCard/:id'  'cards/deleteCard/:id'
    component: CardDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
