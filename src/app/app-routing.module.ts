import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { SortComponent } from './sort/sort.component';
import { HashingComponent } from './hashing/hashing.component';
import { BSTComponent } from './bst/bst.component';
import { ListComponent } from './list/list.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { NodeComponent } from './node/node.component';
import { MongooseComponent } from './mongoose/mongoose.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { ReactComponent } from './react/react.component';
import { AwsComponent } from './aws/aws.component';
import { SqlComponent } from './sql/sql.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'css', component: CssComponent },
  {
    path: 'data-structure', component: DataStructureComponent
  },
  {
    path: 'angular', component: AngularComponent
  },
  {
    path: 'javascript', component: JavascriptComponent
  },
  {
    path: 'mongodb', component: MongooseComponent
  },
  {
    path: 'dotnet', component: DotNetComponent
  },
  {
    path: 'react', component: ReactComponent
  },
  {
    path: 'aws', component: AwsComponent
  },
  {
    path: 'node', component: NodeComponent
  }, {
    path: 'sql', component: SqlComponent
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

