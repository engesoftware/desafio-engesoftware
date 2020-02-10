import { LogoffComponent } from './../logoff/logoff.component';
import { AuthGuard } from './../auth.guard';
import { AppComponent } from './../app.component';
import { ContatoComponent } from './../contato/contato.component';
import { CadastrarComponent } from './../contato/cadastrar/cadastrar.component';
import { EditarComponent } from './../contato/editar/editar.component';
import { RegistrarComponent } from './../registrar/registrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  
  { path: '',redirectTo:'contato', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logoff', component: LogoffComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'contato', component:ContatoComponent, canActivate: [AuthGuard]}, 
  { path: 'contato/novo', component:CadastrarComponent, canActivate: [AuthGuard] },
  { path: 'contato/editar/:id', component:EditarComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
