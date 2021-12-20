import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLeilaoComponent } from './pages/cadastro-leilao/cadastro-leilao.component';
import { ConsultaLeilaoComponent } from './pages/consulta-leilao/consulta-leilao.component';

const routes: Routes = [
  { path: '', redirectTo: '/consulta-leilao', pathMatch: 'full' },
  { path:'consulta-leilao', component: ConsultaLeilaoComponent},
  { path:'leilao', component: CadastroLeilaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
