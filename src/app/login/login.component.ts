import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';
//http://jasonwatmore.com/post/2016/08/16/angular-2-jwt-authentication-example-tutorial#login-component-html
  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login() {
    this.loading = true;
    this.loginService.login(this.model.usuario, this.model.senha)
      .subscribe(result => {
        if(result == true){
          this.router.navigate(['/']);
        }else{
          this.error = 'Usuario ou senha incorreto';
          this.loading = false;
        }
      }, err =>{
        this.loading = false;  
        this.error = 'Usuario ou senha incorreto';
      });
  }

  clicou(){
    alert('oi');
    //  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    localStorage.setItem('userToken', 'abc');
     this.router.navigate(['/tabela-ponto', {}]);
  }

}
