import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;

  constructor() { }

//this was code that wasn't working for router. It goes in the ()
//private dishService: DishService,
//  private route: ActivatedRoute,
//  private location: Location

  ngOnInit() { }
  //this was code that wasn't working for router. It goes in the { } and remove the other {}
  //: void {
  //  let id = this.route.snapshot.params['id'];
  //  this.dish = this.dishService.getDish(id);
  //}

  // goBack(): void {
  //   this.location.back();
  // }
}
