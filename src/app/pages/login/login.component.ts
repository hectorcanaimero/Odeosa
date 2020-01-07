import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  acesso: any = [];
  msg: string;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  acessar() {
    this.getUser(
      this.acesso.email,
      this.acesso.senha
    );
  }

  private getUser(email: string, senha: string) {
    this.api.getEmail(email).subscribe(
      data => {
        data.forEach(el => {
          console.log(el);
          // tslint:disable-next-line: triple-equals
          if (el.tera.bio_senha == senha) {
            localStorage.setItem('coaching', `${el.tera.bio_link_coaching}`);
            localStorage.setItem('consulta', `${el.tera.bio_link_consulta}`);
            this.router.navigate(['']);
          } else {
            this.msg = 'Senha invalida!';
            console.log('Nei');
          }
        });
      },
      erro => {
        this.msg = 'E-mail não cadastrado!';
      }
    );
  }
}
