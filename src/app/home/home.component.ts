import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, ProdutosService } from '../produtos/produtos.service';
import { CarrinhoService } from './carrinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  produtos$: Observable<Produto[]>;

  constructor(
    private service: ProdutosService,
    private carrinhoService: CarrinhoService,
    public router: Router) {
    this.produtos$ = service.listar();
  }

  adicionarNoCarrinho(produto: Produto) {
    this.carrinhoService.insert(produto);
  }

  navigateToProduct(id: number) {
    this.router.navigateByUrl(`produtos/${id}`);
  }

}
