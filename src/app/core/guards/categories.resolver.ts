import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { CategoriesService } from './../services/categories.service';

import { ICategory } from './../../shared/models/category';

@Injectable()
export class CategoriesResolver implements Resolve<ICategory[]> {

  constructor(private _categoriesService: CategoriesService) {}

  resolve(): Observable<ICategory[]> {
    return this._categoriesService.findAll().pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

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

