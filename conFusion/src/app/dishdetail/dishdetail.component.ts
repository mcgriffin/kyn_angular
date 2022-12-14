import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DishComments } from '../shared/dish_comments';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  //@Input()
  dish: Dish;
  errMess: string;
  dishIds: string[];
  prev: string;
  next: string;
  comment: Comment;
  commentForm: FormGroup;
  @ViewChild('cform') commentFormDirective: NgForm;
  dishcopy: Dish;

formErrors:any = {
     'author': '',
     'comment': ''
   };

   validationMessages:any = {
     'author': {
       'required': 'author name is required',
       'minlength': 'author name must be at least 2 characters long',
     },
    'comment': {
      'required': 'comment is required'
    }
 };

  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') public BaseURL:string) { }

    //this.createForm();

  ngOnInit(): void {

    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(+params['id']))).subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id.toString()); },
      errmess => this.errMess = <any> errmess );
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
   this.location.back()};
 }

  // createForm() {
  //   this.commentForm = this.fb.group({
  //     author: ['', [Validators.required, Validators.minLength(2)]],
  //     comment: ['', [Validators.required]],
  //     rating: 5
  //   });
  //
  //    this.commentForm.valueChanges
  //    .subscribe(data => this.onValueChanged(data));
  //
  //    this.onValueChanged(); //(re)set validation messages
  //  }
  //
  // onSubmit() {
  //   this.comment = this.commentForm.value;
  //   this.comment.date = new Date().toISOString();
  //   console.log(this.commment);
  //   this.dishcopy.comments.push(this.comment);
  //   this.dishService.putDish(this.dishcopy)
  //     .subscribe(dish => {
  //       this.dish = dish; this.dishcopy = dish;
  //     },
  //   errmess => { this.dish = null; this.dishcopy = null; this.errMess = <any>errmess; }
  //   this.commentFormDirective.resetForm();
  //   this.commentForm.reset({
  //     author: '',
  //     comment: '',
  //     rating: 5
  //   });
  //   this.commentFormDirective.resetForm();
  // }
  //
  // onValueChanged(data?: any) {
  //   if (!this.commentForm) { return; }
  //   const form = this.commentForm;
  //   for (const field in this.formErrors) {
  //     if (this.formErrors.hasOwnProperty(field)) {
  //       //clear previous error message (if any)
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for ( const key in control.errors ) {
  //           if (control.errors.hasOwnProperty(key)) {
  //             this.formErrors[field] += messages[key] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
