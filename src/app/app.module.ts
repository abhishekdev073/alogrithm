import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroService } from './services/service';
import { Service1Service } from './services/service1.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { httpInterceptorProviders } from 'src/interceptor';
import { SortComponent } from './sort/sort.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { HashingComponent } from './hashing/hashing.component';
import { BSTComponent } from './bst/bst.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAccordion, MatButtonModule, MatButtonToggleModule, MatDividerModule, MatExpansionModule, MatIconModule, MatMenuModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { AngularComponent } from './angular/angular.component';
import { SafePipe } from './safe.pipe';
import { DataComponent } from './data/data.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { NodeComponent } from './node/node.component';
import { MongooseComponent } from './mongoose/mongoose.component';
import { DotNetComponent } from './dot-net/dot-net.component';
import { ReactComponent } from './react/react.component';
import { AwsComponent } from './aws/aws.component';
import { SqlComponent } from './sql/sql.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SortComponent,
    HighchartsChartComponent,
    HashingComponent,
    BSTComponent,
    ListComponent,
    DataStructureComponent,
    AngularComponent,
    SafePipe,
    DataComponent,
    JavascriptComponent,
    HeaderComponent,
    HomeComponent,
    CssComponent,
    NodeComponent,
    MongooseComponent,
    DotNetComponent,
    ReactComponent,
    AwsComponent,
    SqlComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [
    Service1Service,
    httpInterceptorProviders,
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
