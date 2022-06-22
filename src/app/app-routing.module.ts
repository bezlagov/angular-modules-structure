import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {route as clothRoutes} from './cloth/routs'
import {route as kidsRoutes} from './kidsStuff/routs'

const routes: Routes = [
...clothRoutes,
...kidsRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
