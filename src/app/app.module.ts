import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details.component';
import { HeroComponent } from './hero.component';
import { HerosComponent } from './heros.component';
import { BaseComponent } from './base.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { HighlightdirComponent } from './highlightdir/highlightdir.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChilldComponent } from './chilld/chilld.component';
import { DateComponent } from './date/date.component';
import {  DateTimePickerModule } from 'ng-pick-datetime';
import { HeroService } from './services/service';
import { Service1Service } from './services/service1.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { httpInterceptorProviders } from 'src/interceptor';
import { UppercasePipe } from './uppercase.pipe';
import { SortComponent } from './sort/sort.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ListComponent } from './list/list.component';
import { HashingComponent } from './hashing/hashing.component';
import { BSTComponent } from './bst/bst.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    HeroComponent,
    HerosComponent,
    BaseComponent,
    HighlightDirective,
    HighlightdirComponent,
    ChilldComponent,
    DateComponent,
    NotFoundComponent,
    FirstComponent,
    SecondComponent,
    UppercasePipe,
    SortComponent,
    HighchartsChartComponent,
    ListComponent,
    HashingComponent,
    BSTComponent

  ],
  imports: [
    DateTimePickerModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule
   
  ],
  providers: [
    Service1Service,
    httpInterceptorProviders,
    { provide: HeroService, useExisting: Service1Service }],
  bootstrap: [AppComponent]
})
export class AppModule { }
