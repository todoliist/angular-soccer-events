import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, tap,map} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class ProductService{

    private productUrl='api/products/products.json';

    constructor(private http:HttpClient){

    }
    //product-list.component中使用,去掉pipe里的内容不影响网友功能
    getProducts(): Observable <IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            //tap就是把数据原封不动的，类似于观察
            tap(data=> console.log('All:'+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    //product-detail.component中使用
    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts().pipe(
            //下面括号里表示getProducts()产生的整个products数组作为map输入对象，最后emit出类型为IProduct的product对象
            //map是ES5引入的函数，可以对数组里的每一元素执行指定的函数，并返回一个新的元素，
            //.find returns value of the first element in the array that satisfies the provided testing function
          map((products: IProduct[]) => products.find(p => p.productId === id))
        );
      }
    private handleError(err:HttpErrorResponse){
//in a real world app, we may send the server to some remote logging infrasctructure
//instead of just logging it to the console

    let errorMessage='';
    if (err.error instanceof ErrorEvent){
//A client-side or network error occurred.Handle it accordingly.
    errorMessage='An error occurred:${err.error.message}';
    }else{
        //the backend returned an unsuccessful response code.
        //the response body may contain clues as to what went wrong.
        errorMessage='Server returned code:${err.status},error message is:${err.message}';
    }
    console.error(errorMessage);
    return throwError(errorMessage);
    }
}