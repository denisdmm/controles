import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './main/webapp/entities/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'userUpdate', component: UsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
