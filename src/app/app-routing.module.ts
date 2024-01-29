import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './main/webapp/entities/usuarios/usuarios.component';
import { CriarAtividadeComponent } from './main/webapp/entities/atividades/criar-atividade/criar-atividade.component';
import { ListarAtividadeComponent } from './main/webapp/entities/atividades/listar-atividade/listar-atividade.component';
import { LoginComponent } from './main/webapp/entities/shared/login/login.component';
import { RegistroComponent } from './main/webapp/entities/shared/login/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListarAtividadeComponent},
  { path: 'createTask', component: CriarAtividadeComponent },
  { path: 'taskList', component: ListarAtividadeComponent },
  { path: 'userUpdate', component: UsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
