import { Component } from '@angular/core'
import { HeroService } from './services/service';
@Component({
    selector: 'heros',
    templateUrl: './heros.component.html'
})

export class HerosComponent {
    constructor(private service: HeroService) { }
    heros: any;
    ngOnInit() {
        this.getHero();
    }

    getHero() {
        this.service.getHeroes().subscribe(x => {
            this.heros = x;
        })
    }
}