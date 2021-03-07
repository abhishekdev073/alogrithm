import { Component } from '@angular/core'
import { HeroService } from './services/service';
import { ActivatedRoute } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
    selector: 'hero',
    templateUrl: './hero.component.html'
})

export class HeroComponent {
    calendarPlugins = [dayGridPlugin];
    constructor(private service: HeroService, private route: ActivatedRoute) { }
    hero: any;
    id:any;
    test:any;
    junk:any=" {{test[0]||'not found'}}";
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.getHero();
        this.test = ["abhi","yadav","667","not"];
        this.service.heatApi();
    }

    getHero() {
        this.service.getHero(this.id).subscribe(x => {
            this.hero = x[0];
        })
    }
    ngOnDestroy(){
        console.log("Destroy   ngOnDestroy called abhishek");
    }
}