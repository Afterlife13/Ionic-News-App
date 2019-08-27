import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://www.circuitricardotormo.com/wp-json/wp/v2/posts';
  constructor(private http: HttpClient) { }

  // Obtener dias de agenda activa para un idnino
  getNews() {
    return this.http.get(`${this.url}?page=1&per_page=15&_embed`);
  }

  // Obtener tareas para un iddia
  getOneNew(id: number) {
    return this.http.get(`${this.url}/${id}?_embed`);
  }

}
