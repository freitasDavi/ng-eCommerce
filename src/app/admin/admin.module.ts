import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './produtos/listar/listar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { ProdutosModule } from '../produtos/produtos.module';



@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialSharedModule,
    ProdutosModule
  ]
})
export class AdminModule { }
