import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
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

    // headers: Headers;
    // options: RequestOptions;

    constructor(private http: Http) {
        // this.headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Accept': 'q=0.8;application/json;q=0.9'
        // });
        // this.options = new RequestOptions({ headers: this.headers });
    }

    // getService(url: string): Observable<any> {
    getService(): Observable<any> {

          return this.http.get("http://localhost:8080/pontos/oi")
            .map(response => console.log(response.json().contents))
            .catch((err: Response|any)=>{
                return Observable.throw(err.statusText);
          });
        // return this.http.get("http://localhost:8080/pontos/oi", this.options)
        //     .map(this.extractData)
        //     .catch(this.handleError);
    }

    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body || {};
    // }

    // private handleError(error: any) {
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg);
    //     return Observable.throw(errMsg);
    // }
}