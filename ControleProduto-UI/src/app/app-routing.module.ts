import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutoComponent } from './components/listagem-produto/listagem-produto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produto/listagem-produto',
    pathMatch: 'full',
  },
  {
    path: 'produto/listagem-produto',
    component: ListagemProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
