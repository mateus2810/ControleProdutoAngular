import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css'],
})
export class ListagemProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  loading = false;
  displayedColumns: string[] = ['nome', 'altura'];
  @ViewChild(MatTable) table: MatTable<Produto> | undefined;

  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.loading = true;

    this.produtoService
      .pegarTodos()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((resultado) => {
        this.produtos = resultado;
        if (this.table) this.table.renderRows();
      });
  }
}
