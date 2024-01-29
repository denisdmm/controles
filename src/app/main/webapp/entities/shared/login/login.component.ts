import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginModel } from '../../../models/LoginModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userImage!: string;
  username: string =  "admin";
  password: string = "123";
  mensagem!: string;
  formLogin!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router ) {
    this.userImage = '/assets/imagens/userCircle.png';

  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({

      username: ['',[Validators.required]],

      password: ['', [Validators.required]]

    });
  }
  clearForm(){

  }
  login() {
      // debugger
      var dadosLogin = this.formLogin.getRawValue() as LoginModel;
      if ( dadosLogin.username == this.username
            && dadosLogin.password == this.password ){
              this.mensagem = "Login feito com sucesso!";
              this.formLogin.reset;
              // this.router.navigate(['/home'])

      }
      else{
        this.mensagem = "Usuário ou a senha esta incorreto!";
      }

  }

}
