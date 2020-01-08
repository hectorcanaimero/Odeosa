import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: [
    { value: 'coaching', name: 'coaching'},
    { value: 'consulta', name: 'consulta'},
  ];

  constructor(
    private api: ApiService,
    private router: Router
  ) {
    if (!localStorage.getItem('odeosa')) {
      this.router.navigate(['/acesso']);
    }
  }

  ngOnInit() {
  }

  exit() {
    localStorage.removeItem('odeosa');
    this.router.navigate(['/acesso']);
  }
}
