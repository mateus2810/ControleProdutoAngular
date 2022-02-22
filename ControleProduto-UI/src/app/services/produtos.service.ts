import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  url: string = 'http://localhost:40741/Produto/listar-produto';

  constructor(private http: HttpClient) {}

  pegarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
