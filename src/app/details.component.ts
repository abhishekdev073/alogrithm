import { Component, Input } from '@angular/core';
import { IComponentBase } from './IComponentBase';
import { BaseComponent } from './base.component';
import { HeroService } from './services/service'
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
@Component({
    selector: 'detail',
    templateUrl: './details.component.html'
})
export class DetailsComponent extends BaseComponent implements IComponentBase {
    @Input() parrentData: any;
    index = 1;
    show= true;
    constructor(private ser: HeroService,private router:Router) {
        super();
        console.log(this.index++, ' constructor called');
        this.id = 1;
        console.log('this.ser.abhi =', this.ser.abhi)
        this.ser.abhi = "abhi chnge";
        console.log('this.ser.abhi =', this.ser.abhi)
        this.getHero();
        console.log('hero data from inhertance : ', this.hero)
    }

    //get called when input changes
    ngOnChanges(change) {
        console.log(this.index++, ' ngOnChanges detail');

    }
    ngOnInit() {
        console.log(this.index++, " ngOnInit called");
        super.ngOnInit();
        this.componentLoadComplete();
    }
    // ngOnDestroy(){
    //     console.log(this.index++ ,"  ngOnDestroy called");
    // }

    ngDoCheck() {
        this.componentLoadComplete();
        console.log(this.index++, "ngDoCheck() called");
    }

    ngAfterContentInit() {
        console.log(this.index++, "ngAfterContentInit called");
    }

    getGetFromController() {
        return this.index
    }

    updateData() {
        console.log("update data is called");
    }

    action() {
        var a = new Date();
       
        console.log("action started ");
        var obj = [];
        var b = {};
        for (let i = 0; i <= 200; i++) {
            for (let j = 0; j <= 200; j++) {
                for (let k = 0; k <= 100; k++) {
                    b = {
                        name: 'abhishek ' + i + '/ ' + j,
                        lastName: 'abhishek ' + i + '/ ' + j
                    }
                }
            }
            obj.push()
        }
        var k = new Date();
       
        console.log("action end ");

        console.log('time start', a)
        console.log('time end', k);
        this.show = false;
        window.location.reload();
       
    }
    componentLoadComplete() {
        for (let i = 0; i <= 2000; i++) {
            for (let j = 0; j <= 2000; j++) {
               
            }
        }

        this.ser.emitData("p1", this.parrentData.name);
        console.log("component loaded successfully");
    }
}


