import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

dish: Dish;
dishErrMess: string;
promotion: Promotion;

selectedDish: Dish;

constructor(private dishService: DishService,
  private promotionService: PromotionService,
  @Inject('BaseURL') public BaseURL:string) { }

ngOnInit() {
  this.dishService.getFeaturedDish().subscribe(dish => this.dish = dish,
    errmess => this.dishErrMess = <any> errmess );
  this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
}

onSelect(dish: Dish) {
this.selectedDish = dish;
}


}
