import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-atividade',
  templateUrl: './criar-atividade.component.html',
  styleUrls: ['./criar-atividade.component.css']
})
export class CriarAtividadeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    console.log("botao cancelar clicado");
  }
}

