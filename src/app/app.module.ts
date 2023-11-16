import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './main/webapp/shared/shared.module';
import { NavbarComponent } from './main/webapp/layouts/navbar/navbar.component';
import { FooterComponent } from './main/webapp/layouts/footer/footer.component';
import { UsuariosComponent } from './main/webapp/entities/usuarios/usuarios.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsuariosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

  ],
  exports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
