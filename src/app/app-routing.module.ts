import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: HomeComponent
  },
  {
    path: "produtos", loadChildren: () => import("./produtos/produtos.module").then(m => m.ProdutosModule)
  },
  {
    path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "carrinho", component: CarrinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
