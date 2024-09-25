import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly _http = inject(HttpClient);
  
  private urlApi = 'http://localhost:3000/users';
  constructor( private http: HttpClient) { }


  public getTodosUsuarios(): Observable<any>{
    var retorno = this.http.get<any>(this.urlApi + '/todos');
    console.log("retorno", retorno);
    return retorno;
  }



}
