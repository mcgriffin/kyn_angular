import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      //simulate server latency of 2 s
      setTimeout(() => resolve(DISHES), 2000);
    })
  }

   getDish(id: number): Promise<Dish> {
     return new Promise(resolve => {
       //simulate server latency of 2 s
       setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000);
     })
   }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => {
      //simulate server latency of 2 s
      setTimeout(() => resolve(DISHES.filter((dish) => dish.daycare_name)[0]), 2000);
    })
  }
}
