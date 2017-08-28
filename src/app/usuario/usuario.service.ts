import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

    constructor(private _http: Http) {  }

    registrar(usuario: Usuario): Observable<any>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:8080/usuarios/registro', usuario, options)
            .map((response: Response) => {
                let usuarioRegistrado = response;
            });
    }
}