import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { NumberofkidsComponent } from './numberofkids/numberofkids.component';
import { WhendaycareComponent } from './whendaycare/whendaycare.component';
import { WheredaycareComponent } from './wheredaycare/wheredaycare.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DaycarenearmemapComponent } from './daycarenearmemap/daycarenearmemap.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { PromotionService } from './services/promotion.service';

// import { AppRoutingModule } from "./app-routing";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    NumberofkidsComponent,
    WhendaycareComponent,
    WheredaycareComponent,
    HeaderComponent,
    FooterComponent,
    DaycarenearmemapComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    // AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatExpansionModule,
  ],
  //a provider is something you want to make available to your whole application.
  //DishService is a service for the whole app now
  providers: [
    DishService,
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }