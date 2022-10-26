import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
// import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private ProcessHTTPMsgService: ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
    // return of(DISHES).pipe(delay(200)); this was previous before connecting http
  }

   getDish(id: number): Observable<Dish> {
     return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError))
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
     //return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(200));  this was previous before connecting http
   }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.ProcessHTTPMsgService.handleError));
    //return of(DISHES.filter((dish) => dish.daycare_name)[0]).pipe(delay(200))
  }

  getDishIds(): Observable<string[] | any> {
    //return of(DISHES.map(dish => dish.id ));
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.ProcessHTTPMsgService.handleError));
  }

}
