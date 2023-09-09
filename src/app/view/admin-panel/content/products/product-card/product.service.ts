import {Inject, Injectable} from '@angular/core';
import {catchError, Observable, pluck, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ICardsProductInterface, IFirstProductVersion} from "../../../../../../shared/intarfaces/cards-product.interface";

@Injectable()
export class ProductService {
  public getProducts():Observable<any>{
    return this.http.get<ProductService[]>(`${this.baseURL}/products`)
      .pipe(
        pluck<any>('products'),
        catchError(this.handleError)
      )
  }
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseURL: string
  ) { }

  private handleError(error: any): Observable<never> {
    console.error('Помилка:', error);
    return throwError('Помилка отримання даних. Будь ласка, спробуйте ще раз пізніше.'); // Повертаємо альтернативний Observable з помилкою
  }
}
