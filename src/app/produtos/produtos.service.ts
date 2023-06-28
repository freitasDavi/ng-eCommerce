import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';


export type Produto = {
  nome: string,
  descricao: string,
  preco: number,
  categoria: string,
  img: string,
}


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private readonly API = "/assets/produtos.json";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Produto[]>(this.API).pipe(
      tap(p => console.log(p))
    )
  }

  getById(id: string) {
    return this.listar().pipe(
      map(items =>
        items.filter(i => i.nome == id))
    )
  }
}
