import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';

import { CriarAtividadeComponent } from 'src/app/main/webapp/entities/atividades/criar-atividade/criar-atividade.component';

@NgModule({
  imports: [
    SharedLibsModule,
  ],
  declarations: [
    CriarAtividadeComponent

  ],
  exports: [
    CriarAtividadeComponent,
    SharedLibsModule
  ]
})

export class SharedModule {}
