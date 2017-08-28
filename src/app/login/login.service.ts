import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    public token: String;
    
    constructor(private _http: Http){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: String, password: String): Observable<boolean>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:8080/login', JSON.stringify({usuario: username, senha: password}), options)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                if(token){
                    this.token = token;
                    var base64Url = token.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    var responseBody = JSON.parse(window.atob(base64));
                    responseBody = JSON.parse(responseBody.sub);

                    localStorage.setItem('currentUser', JSON.stringify(
                        {_id : responseBody._id,
                         nome: responseBody.nome, 
                         sobreNome: responseBody.sobreNomeusername, 
                         token: token}));

                    return true;
                } else{
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}