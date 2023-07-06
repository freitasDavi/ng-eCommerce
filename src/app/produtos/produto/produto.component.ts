import { Component } from '@angular/core';
import { Produto, ProdutosService } from '../produtos.service';
import { CarrinhoService } from 'src/app/home/carrinho.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent {
  produto: Produto = {} as Produto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutosService) {
    this.activatedRoute.params.subscribe((params: any) => {
      produtoService.getById(params.id).subscribe(p => {
        this.produto = p;
      });
    })
  }

  adicionar(prod: Produto) {
    this.carrinhoService.insert(prod);
  }

}
