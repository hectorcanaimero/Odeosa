import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const url: string = environment.url;
const woo: string = environment.woo.url;
const key: string = environment.woo.key;
const secret: string = environment.woo.secret;

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  // tslint:disable-next-line: variable-name
  getEmail(bio_email: string): Observable<any[]> {
    return this.http
    .get<any[]>(`${ url }/bio`, { params: { bio_email } })
    .pipe(tap(data => data));
  }

  getBio(): Observable<any[]> {
    return this.http
    .get<any[]>(`${ url }/bio`).pipe(tap(data => data));
  }

  getproducts(): Observable<any[]> {
    return this.http
    .get<any[]>( `${ woo }/products`, {
      params: {
        consumer_key: `${ key }`,
        consumer_secret: `${ secret }`,
      }
    });
  }

  getproductSlug(slug: string): Observable<any[]> {
    return this.http
    .get<any[]>( `${ woo }/products`, {
      params: {
        slug: `${ slug }`,
        consumer_key: `${ key }`,
        consumer_secret: `${ secret }`,
      }
    });
  }

  slug(linha: string) {
    return linha.split('/')[4];
  }
}
