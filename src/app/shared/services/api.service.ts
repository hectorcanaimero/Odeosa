import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Products } from './products.interface';
import { Bio } from './bio.interface';
import { Orders } from './orders.interface';

const url: string = environment.url;
const woo: string = environment.woo.url;
const key: string = environment.woo.key;
const secret: string = environment.woo.secret;

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor( private http: HttpClient ) { }

  slug(linha: string) {
    return linha.split('/')[4];
  }

  // tslint:disable-next-line: variable-name
  getEmail(bio_email: string): Observable<Bio[]> {
    return this.http
    .get<Bio[]>(`${ url }/bio`, { params: { bio_email } })
    .pipe(tap(data => data));
  }

  getBio(): Observable<Bio[]> {
    return this.http
    .get<Bio[]>(`${ url }/bio`).pipe(tap(data => data));
  }

  getproducts(): Observable<Products[]> {
    return this.http
    .get<Products[]>( `${ woo }/products`, {
      params: {
        consumer_key: `${ key }`,
        consumer_secret: `${ secret }`,
      }
    });
  }

  getproductSlug(slug: string): Observable<Products[]> {
    return this.http
    .get<Products[]>( `${ woo }/products`, {
      params: {
        slug: `${ slug }`,
        consumer_key: `${ key }`,
        consumer_secret: `${ secret }`,
      }
    });
  }

  getOrders(): Observable<Orders[]> {
    return this.http
    .get<Orders[]>( `${ woo }/orders`, {
      params: {
        consumer_key: `${ key }`,
        consumer_secret: `${ secret }`,
      }
    });
  }
}
