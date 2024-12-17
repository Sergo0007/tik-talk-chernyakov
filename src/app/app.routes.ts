import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { KontaktiComponent } from './components/kontakti/kontakti.component';

export const routes: Routes = [
    {path: "", component: CarComponent},
  {path: "about", component: KontaktiComponent}
];
