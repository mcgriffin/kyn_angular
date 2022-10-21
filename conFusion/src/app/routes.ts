import { Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { NumberofkidsComponent } from './numberofkids/numberofkids.component';
import { WhendaycareComponent } from './whendaycare/whendaycare.component';
import { WheredaycareComponent } from './wheredaycare/wheredaycare.component';
import { DishService } from './services/dish.service';
import { DaycarenearmemapComponent } from './daycarenearmemap/daycarenearmemap.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  {path: 'map', component: DaycarenearmemapComponent},
  {path: 'menu', component: MenuComponent},
  // {path: 'dishdetail/:id', component: DishdetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
