import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';

import { ListarAtividadeComponent } from '../entities/atividades/listar-atividade/listar-atividade.component';

@NgModule({
  imports: [
    SharedLibsModule,
  ],
  declarations: [

  ],
  exports: [
    SharedLibsModule
  ]
})

export class SharedModule {}
