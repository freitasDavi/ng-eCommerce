import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs';


export type Produto = {
  idProduto: number;
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
  private readonly API = "http://localhost:8080/api/produto";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Produto[]>(this.API).pipe(
      tap(p => console.log(p))
    )
  }

  getById(id: string) {
    return this.http.get<Produto>(this.API + `/${id}`).pipe(take(1));
  }
}
