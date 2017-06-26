import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  clicou(){
    alert('oi');
    //  this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    localStorage.setItem('userToken', 'abc');
     this.router.navigate(['/tabela-ponto', {}]);
  }

}
