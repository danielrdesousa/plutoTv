import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

import { IItem } from '../../shared/models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseURL = `${environment.api}/items`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  findAll(categoryId: string): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.baseURL}?categoryId=${categoryId}&_expand=category&_sort=categoryId&_order=desc`, { headers: this.headers })
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOne(slug: string): Observable<IItem> {
    return this.http.get<IItem[]>(`${this.baseURL}?slug=${slug}`, { headers: this.headers })
    .pipe(
      map((item: IItem[]) => item[0]),
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error: any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
