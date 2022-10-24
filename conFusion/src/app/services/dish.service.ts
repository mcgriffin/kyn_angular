import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
// import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes');
    // return of(DISHES).pipe(delay(200)); this was previous before connecting http
  }

   getDish(id: number): Observable<Dish> {
     return this.http.get<Dish>(baseURL + 'dishes/' + id);
     //return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(200));  this was previous before connecting http
   }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(baseURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]));
    //return of(DISHES.filter((dish) => dish.daycare_name)[0]).pipe(delay(200))
  }

  getDishIds(): Observable<string[] | any> {
    //return of(DISHES.map(dish => dish.id ));
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

}
