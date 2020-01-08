import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
  }

  acessar() {
    this.spinner.show();
    this.getUser( this.acesso.email, this.acesso.senha );
  }

  private getUser(email: string, senha: any) {
    this.api.getEmail(email).subscribe(
      data => {
        data.forEach(el => {
          // tslint:disable-next-line: triple-equals
          if (el.tera.bio_senha == senha) {
            const odeosa = {
              coaching: el.tera.bio_link_coaching,
              consulta: el.tera.bio_link_consulta
            };
            localStorage.setItem('odeosa', JSON.stringify(odeosa));
            this.router.navigate(['']);
            this.spinner.hide();
          } else {
            this.msg = 'Senha invalida!';
            this.spinner.hide();
          }
        });
      },
      erro => {
        this.msg = 'E-mail não cadastrado!';
        this.spinner.hide();
      }
    );
  }
}
