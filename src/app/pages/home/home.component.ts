import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  coaching: any = [];
  consulta: any = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getproductSlug(this.api.slug(localStorage.getItem('coaching'))).subscribe(
      data => {
        this.coaching = data[0];
        console.log(data[0]);
      },
      erro => console.log(erro)
    );
    this.api.getproductSlug(this.api.slug(localStorage.getItem('consulta'))).subscribe(
      data => this.consulta = data[0],
      erro => console.log(erro)
    );
  }

}
