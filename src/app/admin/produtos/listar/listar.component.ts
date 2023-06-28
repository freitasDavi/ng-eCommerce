import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, ProdutosService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {
  products: Observable<Produto[]>;
  displayedColumns = ['name', 'price', 'category', 'img', 'actions'];

  constructor(private service: ProdutosService) {
    this.products = service.listar();

    console.log(this.products);
  }

  onAdd() {

  }

}
