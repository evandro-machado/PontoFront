import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TabelaPontoComponent } from './tabela-ponto/tabela-ponto.component';
import { FormsModule }   from '@angular/forms';
import { ListaMesesComponent } from './lista-meses/lista-meses.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'tabela-ponto', component: TabelaPontoComponent },
  { path: 'login',      component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TabelaPontoComponent,
    ListaMesesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
