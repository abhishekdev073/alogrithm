import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { HeroService } from './services/service';
import { Service1Service } from './services/service1.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    title = 'home';
    pageNo=12;
    user: {}
    data = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' }
    ];
    checked: any;
    fullName: any ='rohit';
    fullName1: any;
    show: boolean;
    heroData: any;
    heroData1: { id: string; name: string; lastName: string; }[];
    constructor(private service: HeroService,
        private cdr: ChangeDetectorRef  
              // ,private service1: Service1Service
        ) {

    }

    ngOnInit() {
        console.log("home page is initialized");
        this.checked = false;
        this.show = false;
        this.getHeroData();
        this.getDatefromChildren();
        console.log("calll")
    }

    ngOnDestroy() {
        // console.log("home component destroyed");
    }

    ngOnChanges() {
        console.log("home component ngOnChanges");
    }
    clickUpdateInput = ((val) => {
        this.fullName = val;
        this.fullName1 = this.fullName1;
    })
    clickedOnHero = ((usr) => {
        this.user = usr;
    });

    getHeroData() {
        this.heroData = this.service.getData();
        this.heroData1 = this.service.getData();
        this.getHeroes()
    }

    getHeroes() {
        this.service.getHeroes().subscribe(x => {
            this.heroData = x
        })
    }
    trigger(){
        console.log('abhi')
        this.cdr.markForCheck();
        this.cdr.reattach();
        this.cdr.detectChanges();
        this.cdr.detach();
        this.cdr.reattach();
        this.cdr.detectChanges();
    }
    getDatefromChildren() {
        this.service.getEmitter("p1").subscribe(x => {
            console.log("Getting data from p1 child ", x);
        })
    }
}