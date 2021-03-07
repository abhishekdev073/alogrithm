import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }   from './home.component';
import { DetailsComponent }  from './details.component';
import { HerosComponent }  from './heros.component';
import { HeroComponent }  from './hero.component';
import { HighlightdirComponent }  from './highlightdir/highlightdir.component';
import { DateComponent } from './date/date.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FirstComponent } from './first/first.component';
import { MyGuardGuard } from './my-guard.guard';
import { SortComponent } from './sort/sort.component';
import { ListComponent } from './list/list.component';
import { HashingComponent } from './hashing/hashing.component';
import { BSTComponent } from './bst/bst.component';
 
 
const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a', // child route path
        component: HeroComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: DateComponent, // another child route component that the router renders
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'sort', component: SortComponent },
  { path: 'hashing', component: HashingComponent },
  { path: 'bst', component: BSTComponent },
  { path: 'list', component: ListComponent },
  { path: 'bst', component: BSTComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: 'date', component: DateComponent,canActivate:[MyGuardGuard] },
  { path: 'attributeDirective', component: HighlightdirComponent },
  { path: '**', component: NotFoundComponent }

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

