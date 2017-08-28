import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TabelaPontoComponent } from './tabela-ponto/tabela-ponto.component';
import { AuthGuard } from './guards/auth.guard';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'tabela-ponto', component: TabelaPontoComponent, canActivate: [AuthGuard] },
    { path: 'usuario/registro', component: UsuarioComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'tabela-ponto' }
];
 
export const routing = RouterModule.forRoot(appRoutes);