import { Injectable } from '@angular/core';
import { Produto } from '../produtos/produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  public produtos: Produto[] = [];

  constructor() { }

  public getProdutosFromLocalStorage() {
    const produtosS = JSON.parse(String(localStorage.getItem('produtos')));

    this.produtos = produtosS ? produtosS : [];

    return this.produtos;
  }

  public excluir(indice: number) {
    this.produtos.splice(indice, 1);

    this.salvar();
  }

  public update(index: number, produto: Produto) {
    this.produtos[index] = produto;

    this.salvar();
  }

  public insert(produto: Produto) {
    this.produtos.push(produto);

    this.salvar();
  }

  public salvar() {
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }

  public recuperarPorId(index: number) {
    try {
      this.produtos = this.getProdutosFromLocalStorage();

      return this.produtos[index];
    } catch (e) {
      return null;
    }
  }
}
