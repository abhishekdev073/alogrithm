import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { from, of } from "rxjs";
import { HeroService } from "./service";
import { Service1Service } from "./service1.service";
var FakeHttpClient = {
    get: function (url, body) {
        if (url.indexOf('./getUser') !== -1) {
            return of("httpClient get user mock")
        }
    },
    post: function (url, body) {
        if (url.indexOf('./saveUser') !== -1) {
            return from([{ msg: "user saved successful", status: 200, success: true, data: body }])
        }
    }
}
class spyServiceObj {
    getData() {
        return "mock service data"
    }
    getDataObs() {
        return of('mock I am from observer')
    }
}
describe('ValueService', () => {
    let service: HeroService;
    let mockService: Service1Service;
    beforeEach(async () => {
        const spy = jasmine.createSpyObj('HeroService', ['getValue']);
        spy.getValue.and.returnValue("I am stubbed");
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                HeroService,
                { provide: HttpClient, useValue: FakeHttpClient },
                { provide: Service1Service, useClass: spyServiceObj }
            ]
        });
    });
    beforeEach(() => {
        service = TestBed.get(HeroService);
        mockService = TestBed.get(Service1Service);
    })
  
   
    it('#service data', () => {
        var data = service.getValue();
        expect(data).toEqual('Data from service');
    });
    it('#service mock data', () => {
        var data = mockService.getData()
        expect(data).toEqual("mock service data", "Fail");
    });

    it('#service observable', () => {
        service.getDataObs().subscribe(data => {
            expect(data).toEqual("I am from observer", "Fail");
        })
    });
    it('#mock service observable', () => {
        mockService.getDataObs().subscribe(data => {
            expect(data).toEqual("mock I am from observer", "Fail");
        })
    });

    it('#httpClient get mock', () => {
        service.apiGetCall().subscribe(data => {
            expect(data).toEqual('httpClient get user mock');
        })
    });
    it('#httpClient post mock', () => {
        service.apiPostCall("foo", "bar").subscribe(data => {
            expect(data.success).toEqual(true);
        })
    });

});