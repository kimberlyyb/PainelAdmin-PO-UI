import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  private apiUrl = 'http://localhost:3000/products'; 

  constructor(
    private http: HttpClient
  ) {}

  get(): Observable<any> { // Aqui ele retorna any, pq é uma definição do db.json que estamos utilizando. No backend real, poderíamos retornar Observable<Tasks>.
    return this.http.get('http://localhost:3000/itens');
  }

  getById(id: number): Observable<any> {
    return this.get().pipe(
      map((itens: any) => itens.items.filter((itens: any) => itens.id === id))
    );
  }

  create(itens: any): Observable<any> {
    return this.http.post(this.apiUrl, itens);
  }

  update(id: number, itens: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, itens);
  }
}

