import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './main/webapp/shared/shared.module';
import { NavbarComponent } from './main/webapp/layouts/navbar/navbar.component';
import { FooterComponent } from './main/webapp/layouts/footer/footer.component';
import { UsuariosComponent } from './main/webapp/entities/usuarios/usuarios.component';
import { ListarAtividadeComponent } from './main/webapp/entities/atividades/listar-atividade/listar-atividade.component';
import { RouterModule } from '@angular/router';
import { CriarAtividadeComponent } from './main/webapp/entities/atividades/criar-atividade/criar-atividade.component';
import { LoginComponent } from './main/webapp/entities/shared/login/login.component';
import { RegistroComponent } from './main/webapp/entities/shared/login/registro/registro.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsuariosComponent,
    ListarAtividadeComponent,
    CriarAtividadeComponent,
    LoginComponent,
    RegistroComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
