import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TabelaPontoComponent } from './tabela-ponto/tabela-ponto.component';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule }   from '@angular/forms';
import { ListaMesesComponent } from './lista-meses/lista-meses.component';
import { RouterModule, Routes } from '@angular/router';

import { TabelaPontoService } from './tabela-ponto/tabela-ponto.service';
import { LoginService } from './login/login.service';
import { UsuarioService } from './usuario/usuario.service';

import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabelaPontoComponent,
    ListaMesesComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    TabelaPontoService,
    LoginService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
