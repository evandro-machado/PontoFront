import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { Ponto } from "./ponto";
import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class TabelaPontoService {

    constructor(private http: Http) {
    }



    buscarPontos(pontosVO: Object): Observable<Ponto[]> {
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + currentUser.token);
        let options = new RequestOptions({ headers: headers });
        return this.http.post("http://localhost:8080/pontos", JSON.parse(JSON.stringify(pontosVO)), options)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    alterarPonto(alterarPontoVo: Object): Observable<any> {
        return this.http.put("http://localhost:8080/pontos", alterarPontoVo)
            .map(response => response.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}