import { Component, OnInit, HostListener } from '@angular/core'
import { HeroService } from './services/service';
import { ActivatedRoute } from '@angular/router';
import { AppInjector } from './../app-injector.service';
@Component({
    selector: 'base',
    template: 'No Ui',
    host: { 'window:beforeunload': 'windowUnload' }
})

export class BaseComponent implements OnInit {
    @HostListener('window:beforeunload', ['$event'])
    windowUnload($event) {
        console.log("Reloading");
        this.service.heatApi();
      //  $event.returnValue = 'Your data will be lost!';
    }
    protected service: HeroService;
    hero: any;
    id: any;
    constructor() {
        
        console.log("constructor called of base");
        const injector = AppInjector.getInjector();
        this.service = injector.get(HeroService);
        console.log('this.ser.abhi from base =', this.service.abhi)
        this.service.abhi = 'zyz'
    }
    ngOnInit() {
        console.log('ngOnInit of base get called')
    }

    getHero() {
        this.service.getHero(this.id).subscribe(x => {
            this.hero = x[0];
        })
    }
    ngOnDestroy() {
        console.log("Destroy   ngOnDestroy called abhishek");
        alert("234");
    }

}