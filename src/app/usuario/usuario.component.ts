import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private _router: Router, private _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  registrar(){
    this._usuarioService.registrar(this.usuario).subscribe();
    localStorage.setItem('currentUser',"123");
    this._router.navigate(['/tabela-ponto']);
  }

}
