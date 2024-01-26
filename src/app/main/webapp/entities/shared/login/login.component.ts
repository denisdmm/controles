import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userImage!: string;
  username!: "admin";
  password!: "123";
  mensagem!: string;
  formLogin: any;


  constructor(private formBuilder: FormBuilder) {
    this.userImage = '/assets/imagens/userCircle.png';

    this.criarForm();

  }

  ngOnInit(): void {
  }

  criarForm() {

    this.formLogin = this.formBuilder.group({

      username: [''],

      password: ['']

    });

  }

  login() {

    if (this.formLogin.get('username').value == this.username && this.formLogin.get('password').value == this.password) {

      this.mensagem = "Login feito com sucesso!";

    } else {

      this.mensagem = "Usuário ou a senha estão errados!";

    }

  }

}
