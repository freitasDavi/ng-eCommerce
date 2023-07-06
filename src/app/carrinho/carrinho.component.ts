import { Component } from '@angular/core';
import { CarrinhoService } from '../home/carrinho.service';
import { Produto } from '../produtos/produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent {
  produtos: Produto[];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos = carrinhoService.getProdutosFromLocalStorage();

    this.total = this.produtos.reduce((somaParcial, valor) => somaParcial + valor.preco, 0);
  }


  removerDoCarrinho(prod: Produto) {
    console.log("Removendo produto " + prod);
  }

  finalizarCompra() {

  }
}
