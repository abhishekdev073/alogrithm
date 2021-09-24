export const data = {
    "angular": [{
        "question": "Angular Command",
        "responses": [{
            "value": "npm install -g @angular/cli@latest",
        },
        {
            "value": "ng generate directive highlight",
        },
        {
            "value": "ng serve",
        },
        {
            "value": "ng generate service heroes/hero",
        },
        {
            "value": "ng generate pipe safe",
        },

        {
            "value": "ng generate component xyz CREATE",
            "desc": [
                "CREATE src/app/xyz/xyz.component.html (18 bytes)",
                "CREATE src/app/xyz/xyz.component.spec.ts (607 bytes)",
                "CREATE src/app/xyz/xyz.component.ts (263 bytes)",
                "CREATE src/app/xyz/xyz.component.css (0 bytes)",
                "UPDATE src/app/app.module.ts (535 bytes)"
            ],
        },
        ]
    },
    {
        "question": "Selector",
        "responses": [{
            "value": "'app-server' or selector: '[app-server]' or selector: '.app-server'",
        },
        {
            "value": '<app-server></app-server> or <div app-server></div> or <div    class="app-server"></div>',
        }
        ]
    },
    {
        "question": "Angular.json",
        "responses": [{
            "value": "Angular use angular.json file to build the code.",
        },
        {
            "value": "Angular contain entry point for our application like index.html and style files, CLIBuilder command",
        },
        {
            "value": " Required script get added at our index.html page(main.ts, polyfills.js)",
        },
        {
            "value": "main.ts create the browser environment to run our application \\ platformBrowserDynamic().bootstrapModule(AppModule)\
            ",
        },
        {
            "type": "text",
            "value": 'AppModule contain all the component and bootstrap the main component',
            "desc": ["{", "declarations: [AppComponent, AngularBasicComponent,MyPipePipe] --  Contain component and pipes ",
                "Providers:[services] --add services get injected",
                "Import:[FormsModule,browserModule,MatTabsModule] --Import FormsModule to use ngModel in AppModule",
                "bootstrap:AppComponent",
                "}"
            ]
        }
        ]
    },
    {
        "question": "polyfill",
        "responses": [{
            "value": "a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers, e.g., to support canvas (an HTML5 feature) in older browsers.",
        },
        ]
    },
    {
        "question": "Components",
        "responses": [{
            "value": "Building block of Angular applications. Can be reused"
        },
        {
            "value": "Components lifecycle events :- You can respond to events in the lifecycle of a component or directive",
        },
        {
            value: '@Component({',
            desc: [

                '      selector: "app - tet",',
                '      templateUrl: :./tet.component.html,',
                '      styleUrls: ["./ tet.component.css"],',
                '      changeDetection: ChangeDetectionStrategy.OnPush,',
                '      encapsulation: ViewEncapsulation.ShadowDom,',
                '      providers: [{provide: HeroService, useValue: {name: "abhishek tet1"}}],',
                '      animations: []',
                '     })',
            ]
        },
        {
            "value": "ngOnChanges :- Called before ngOnInit(), called on data-bound input properties change.",
            "desc": [
                "Note that this happens very frequently so any operation you perform here impacts performance significantly",
                "if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges()"
            ]
        },
        {
            "value": "ngOnInit  :- Called once, after the first ngOnChanges()",
        },
        {
            "value": "ngDoCheck :-use for custom detect changes. Detect and act upon changes that Angular can't or won't detect on its own. Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run",
        },
        {
            "value": "ngAfterContentInit :-Called once after the first ngDoCheck().",
        },
        {
            "value": "ngAfterContentChecked :- Called after ngAfterContentInit() and every subsequent ngDoCheck().",
        },
        {
            "value": "ngAfterViewInit :- Called once after the first ngAfterContentChecked()",
        },
        {
            "value": "ngAfterViewChecked :- Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked",
        },
        {
            "value": "ngOnDestroy :- Called immediately before Angular destroys the directive or component",
        },

        ]
    },
    {
        "question": "Component Interaction",
        "responses": [{
            "value": "Child to parent ------Input & Output",
            "image": "./parent2child1.png",
        },
        {
            "image": "./parent2child2.png",
        },
        {
            "value": "Parent to child -- Local variable",
            "desc": [
                'Parent access child by creating a template reference variable for the child element  #timer',
            ]
        },
        {
            "image": "./parent2child3.png",
        },
        {
            "image": "./parent2child4.png",
        },
        {
            "value": "@ViewChild() -- Inject the child component into the parent as a ViewChild.",
            "image": "./parent2child5.png"
        },
        {
            "image": "./parent2child6.png"
        },
        {
            "value": "Parent and children communicate via a service"
        },
        {
            "value": "Event EventEmitter"
        }
        ]
    },
    {
        "question": " Dynamic component loader",
        "responses": [{
            "value": "ComponentFactoryResolver to add components dynamically. At runtime",
            "desc": [
                'The anchor directive  :- Define anchor point to tell Angular where to insert components',
                ' <ng-template adHost></ng-template>'
            ]
        }]
    },

    {
        "question": "Angular elements",
        "responses": [{
            "value": " Angular elements are Angular components packaged as custom elements (Web Components) create new custom tag which work with any framework and lib. less code of angular",
        }]
    },
    {
        "question": "Template",
        "responses": [{
            "value": "a template is a chunk of HTML. Within a template, you can use special syntax to leverage many of Angular's features.",
        }]
    },
    {
        "question": "Interpolation",
        "responses": [{
            "value": "It get changed {{...}} <h3>Current customer: {{ currentCustomer }}</h3>",
        }]
    },
    {
        "question": "Pipes",
        "responses": [{
            "value": "Transforming Data Using Pipes",
            "desc": ["{{ birthday | date | uppercase}}", "{{name|localization}}",
                "It can be pure or not",
                "pure:false it wil run on every change detection",
                "pure :false, slow the app",
                "Pure it will run only if its value changed this is benefits over service"
            ]
        }]
    },
    {
        "question": "Data binding // Template syntax ",
        "responses": [{
            "desc": [
                "Interpolation   - {{name}}",
                "Property binding  -<input [value]='firstName'> ",
                "Event binding     -  <button (click)='readRainbow($event)'>",
                "Attribute binding  - <div [attr.role]='myAriaRole'> ",
                "Class binding    -   <div [class.extra-sparkle]='isDelightful'> ",
                "Style binding    -  <div [style.width.px]='mySize'>	",
                "Two-way data binding with ngModel	 	<my-cmp [(title)]='name'>",
                "<p>Card No.: {{cardNumber | myCardNumberFormatter}}</p> : pipe",
                "<p>Employer: {{employer?.companyName}}</p> check null",
            ]
        }]
    },
    {
        "question": "HTML attribute and the DOM property",
        "responses": [{
            "value": "HTML attribute and the DOM property are different things, even when they have the same name. (attr/property :- id,property:textContent,attr:area*)",
            "desc": ['define attributes on your HTML elements. browser parse and convert it into object node and object  property',
                'In Angular, the only role of HTML attributes is to initialize element and directive state',
                'Template binding works with properties and events, not attributes.',
                'Attributes initialize DOM properties and then they are done. Property values can change; attribute values cant.',
                '<input [attr.disabled]="condition ? "disabled" : null">',
                'There is one exception to this rule. Attributes can be changed by setAttribute(), which re-initializes corresponding DOM properties',
            ]
        }]
    },
    {
        "question": "Binding Property",
        "responses": [{
            "value": '<img [src]="heroImageUrl"> ||<app-hero-detail [hero]="currentHero"></app-hero-detail> || <div [ngClass]="{special: isSpecial}"></div>',
            "desc": [
                'Event binding',
                '<button (click)="onSave()">Save</button>',
                '<app-hero-detail (deleteRequest)="deleteHero()"></app-hero-detail>',
                '<div (myClick)="clicked=12" clickable>click me</div>',
            ]
        },
        { value: 'Two-way :- <input [(ngModel)]="name">' },
        { value: 'Attribute  :- <button [attr.aria-label]="help">help</button>' },
        { value: 'Class :- <div [class.special]="isSpecial">Special</div>' },
        { value: ' Style <button [style.color]="isSpecial ? "red" : "green">' },
        { value: ' [style]="styleExpression"' }
        ]
    },
    {
        "question": "Template expression operators",
        "responses": [{
            "desc": [
                '<p>Item json pipe: {{item | json}}</p>',
                ' <p>The item name is: {{item?.name}}</p>   ',
                ' Sometimes a binding expression triggers a type error during AOT compilation ',
                ' <p>The items undeclared best by date is: {{$any(item).bestByDate}}</p>',
            ]
        }]
    },
    {
        "question": "Directives",
        "responses": [{
            "value": "Building block of Angular applications. Can be reused",
            "desc": [
                '  attribute directives :- change the appearance or behavior of an element, component or another directive.',
                "e.g [ngClass] and [ngStyle], [NgModel]",
                '  structural directives. -- change the DOM layout by adding and removing DOM elements.. ',
                'ngFor ,ngIf,NgSwitch =>* means going to change dom',
                '  Components directives --directives with a template',
            ]
        }]
    },

    {
        "question": "Custom directive",
        "responses": [{
            "value": "it is like component don't have template .we can change style by using ElementRef add event using HostListener.",
            "desc": ["we can also create custom structural directive "]
        }]
    },
    {
        "question": "Injector",
        "responses": [{
            "value": "An object in the Angular dependency-injection system. can find a named dependency in its cache or create a dependency using a configured provider",
            "desc": ["An injector provides a singleton instance of a dependency, and can inject this same instance in multiple components.",
                "hierarchy of injectors at the NgModule and component level",
                "You can configure injectors with different providers that can provide different implementations of the same dependency e.g useClass,useValue,useExisting"
            ]
        }]
    },
    {
        "question": "Injectable",
        "responses": [{
            "value": "Service get inserted at root or at module level",
            "desc": [" @Injectable({providedIn: root,}) :- service get injected at root level",
                "@NgModule({providers: [UserService]}) :- service get injected at module level",
                "providedIn in better that providers array.",
            ]
        }]
    },
    {
        "question": "Tree-shaking and @Injectable()",
        "responses": [{
            "value": "providedIn property is preferable to the @NgModule()",
            "desc": ["providedIn in better that providers array.", "if service is not used in any component then it wont be added in our bundle :- Called Tree shaking",
                "Tree-shaking :- While optimization in bundle don't add injectable services that is not used",
                "@Injectable({",
                "providedIn: UserModule",
                "})",
                "@NgModule({",
                "providers: [UserService],",
                "})",
            ]
        }]
    },
    {
        "question": "Dependency injection",
        "responses": [{
            "value": "Single instance in the entire app, unless you configure another provider with a child injector",
            "desc": ["@Injectable() creating service instances and inject the service in component", "Class asks for dependencies from external sources rather than creating them itself",
                "DI framework provides declared dependencies to a class when that class is instantiated",
                "supply data to a component from an injectable service class"
            ]
        },
        {
            value: "Configure service to provider",
            desc: [
                "In the @Injectable() decorator for the service itself.",
                "In the @NgModule() decorator for an NgModule.",
                "In the @Component() decorator for a component.",
            ]
        },
        {
            "value": "Multiple service instances (sandboxing)",
            "desc": ["Provide services at component level"]
        }
        ]
    },
    {
        "question": "Providers",
        "responses": [{
            "value": "configuring providers, you can make services available to the parts of your application that need them",
            "desc": [
                "default behavior is for the injector to instantiate that class with new",
                "{ provide: HeroService, useClass:Service1Service } :- give instance of Service1Service. if Service1Service its not already provided it will work",
                "{ provide: HeroService, useExisting:Service1Service } :- uses existing service.Service1Service already should be provide ,instance should be there ",
                "{ provide: HeroService, useValue:{name:'abhishek yadav' } :- pass value to it"
            ]
        },
        {
            value: "Non-class dependencies :-want to add object without any type"
        },
        {
            value: "1. String token :- used for non class dependency",
            desc: [
                " { provide: 'CONFIG', useValue: {name:'abhishek' }",
                "constructor(@Inject('CONFIG') public Config: any) {}",
                "As its uses string instead of type it is prone to error. can be overridden by other developer or other lib"
            ]
        },
        {
            value: "2. Injection Token :- used for non class dependency",
            desc: [
                "export const APP_CONFIG = new InjectionToken<any>('');",
                "{ provide: APP_CONFIG, useValue: {name:'abhishek' }",
                "constructor(@Inject(APP_CONFIG) public Config: any) {}",
            ]
        },
        {
            value: "Factory providers :-To create a changeable, dependent value based on information unavailable before run time, you can use a factory provider",
            desc: [
                "export let heroServiceProvider =",
                "{",
                "provide: HeroService,",
                "     useFactory: heroServiceFactory,",
                "     deps: [Logger, UserService]//pass these 2 heroServiceFactory based on its value instances             get set",
                "};	",
                " const heroServiceFactory = (logger: Logger, userService: UserService) => {",
                " return new HeroService(logger, userService.user.isAuthorized);",
                "};",
            ]
        }
        ]
    },
    {
        "question": "@Self @SkipSelf @Host @Optional",
        "responses": [{
            "value": "constructor( @Optional() @Host private heroService: HeroService){}",
            "desc": ["@Self :- the injector only looks at the component's injector for its providers",
                "@SkipSelf : - skip the local injector and look up in the hierarchy ",
                " @Optional() // ok if the logger doesn't exist",
                " @Host()     // it will in self and its parent",
                "e.g :-Directive we have used in component the directive look in it self and it parent component",
                " <ng-content></ng-content>:- in this child can access to till its parent"
            ]
        }]
    },
    {
        "question": "To break circular dependencies ",
        "responses": [{
            "value": "providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }],",
            "desc": ["forwardRef() Allows to refer to references which are not yet defined."]
        }]
    },
    {
        "question": "Routing",
        "responses": [{
            "value": "Bases on path component get loaded",
            "desc": [
                "      create app.routing module add in app.module  ",
                "      add path in routes array"
            ]
        },
        {
            image: "routes1.png"
        },
        {
            value: "Nested route add route-outlet and matching url get loaded"
        }]
    },
    {
        "question": "Read param from url ",
        "responses": [{
            "value": "constructor(private route: ActivatedRoute) {}",
            "desc": [
                "  this.route.queryParams.subscribe(params => {",
                "      this.name = params['name'];",
                "      });",
            ]
        }, {
            value: "this.router.navigate(['/heroes', { id: heroId }])"
        },
        {
            value: 'PathLocationStrategy—the default "HTML5 pushState" style.'
        },
        {
            value: 'HashLocationStrategy—the "hash URL" style.'
        }
        ]
    },
    {
        "question": "Interceptors  ",
        "responses": [{
            "value": "inspect and transform HTTP requests from your application to a server.",
            "desc": ["caching,adding header,logging"]
        }]
    },
    {
        "question": "Internationalization",
        "responses": [{
            "value": "Localizing your app :- dates, times, numbers, and currencies ",
        }]
    },
    {
        "question": "Schematic",
        "responses": [{
            "value": "create code like angular cli command",
            "desc": ["schematic is a template-based code generator that supports complex logic"]
        }]
    },
    {
        "question": "service worker and PWA progressive web app",
        "responses": [{
            "value": "manage caching of application",
            "desc": [
                "cache application like installing native application",
                "update happened in background",
                "it download manifest from server :which file to cache. inform new version available downloaded and cached",
            ]
        }]
    },
    {
        "question": "Getter",
        "responses": [{
            "value": "getter :-  get fullName(){} :-html {{ fullName }}",
        }]
    },
    {
        "question": "Change detection",
        "responses": [{
            "value": "Synch UI with state of data",
            "desc": [
                "When it runs save current state as previous state for next time running",
                "Event(click) changes state it trigger change detection",
                "Event, Promises and setTimeout, setInterval trigger change detection"
            ]
        }]
    },
    {
        "question": "Calling method directly form view",
        "responses": [{
            "value": "If you use functional inside expressions it will get called on every change detection  {{getFullName()}}",
            "desc": ["getFullName will get called on every time change detection run. Not good",
                "Change detection get called in component even event ocurred at outside of this component",
            ]
        }, {
            value: "Solution",
            desc: [
                "1. changeDetection: ChangeDetectionStrategy.OnPush :-  change detection work only in this component if event occur in it or if its input changes",
                "2. Use pure pipe :- during change detection pure pipe get called only when its input changes"
            ]
        }]
    },
    {
        "question": "Track by",
        "responses": [{
            "value": "ngFor if we change the array it will re-render the view again. track by only changed element get re-render",
            "desc": ["When we have more record like 1k then it is useful"]
        }]
    },
    {
        "question": "Content projection",
        "responses": [{
            "value": "<ng-content></ng-content> :- <home>it will get inserted in home template where we right <ng-content></ng-content> </home>",
        }]
    },
    {
        "question": "ViewProviders and providers",
        "responses": [{
            "value": "view provider its service get access in view but not in <ng-content>",
            "desc": [
                " @Component({",
                "    providers: [UserService]",
                "  })",
                "  @Component({",
                "      viewProviders: [UserService]",
                "    })",

            ]
        }]
    },
    {
        "question": "View encapsulation",
        "responses": [{
            "value": "CSS styles are encapsulated into the component's view and don't affect the rest of the application",
        },
        {
            value: "encapsulation: ViewEncapsulation.ShadowDom",
            desc: ["encapsulate css. its style remain separate from rest of the dom. its children will get its style"]
        },
        {
            value: "encapsulation: ViewEncapsulation.none",
            desc: ["style goes to global level",
                "If same style in parent and child last style get applied as last loaded to the UI"
            ]
        },
        {
            value: "encapsulation: ViewEncapsulation.Emulated",
            desc: ["By default :-its children will not get its styling. it add host to id and its content"]
        }
        ]
    },
    {
        "question": "Shadow DOM",
        "responses": [{
            "value": "Style and behavior hidden from other component .like video tag",
        }]
    },
    {
        "question": "Form",
        "responses": [{
            "value": "1. Reactive forms",
            "desc": ["more scalable, reusable, and testable .model get handle explicitly"]
        },
        {
            image: "form1.png",
        },
        {
            value: "profileForm.value to get",
            desc: ["this.profileForm.setValue({}) takes complete object   this.profileForm.patchValue({}) can update single property"]

        },
        {
            value: "FormBuilder :- Its service provide reactive form module",
            image: "form2.png"
        },
        {
            value: "Dynamic forms: FormArray :- its uses FormArray its an alternative to FormGroup. used to create dynamic form ",
            image: "form3.png",
            desc: [
                "To change the controls in the array, use the push, insert, removeAt or clear methods in FormArray itself."
            ]
        },
        {
            value: "formGroup => FormControl => Make group of form control based on object dynamic form will get created change that object form will change",
            desc: [

            ]
        },
        {
            value: "2. Template-driven forms :-",
            desc: [
                "rely on directives in the template to create and manipulate the underlying object model. 2 way binding."
            ]
        },
        ]
    },
    {
        "question": " Custom form validation",
        "responses": [{
            "value": "In reactive form we just pass function to formcontrol along with other validator",
            "image": "form4.png",
            "desc": [
                "  in Template-driven forms we create the directive and add to the input field",
            ]
        }]
    },
    {
        "question": "Template variables ",
        "responses": [{
            "value": "Building block of Angular applications. Can be reused",
            "desc": [' <input #phone placeholder="phone number" />', '<button (click)="callPhone(phone.value)">Call</button>']
        }]
    },

    {
        question: "Differential loading",
        responses: [{
            value: "create 2 bundle for application 1. small for modern browser . 2. large for old browser",
        }]
    },
    {
        question: "Eager loading",
        responses: [{
            value: "module or component get loaded at launch opposite of lazy loading",
        }]
    },
    {
        question: "Angular CLI builders",
        responses: [{
            value: "we can add command or modify existing command like  ng build,ng test and ng lint",
            desc: [
                "we create 1 node project with schema (input format),builder.json file which has copy-package in it	",
                "we right logic in our file index.js give its reference in builder.json file",
                "run command tsc it will convert .ts file to .js file",
                "we import node project inside our angular project package.json file.", "devDependencies '@example/copy-file':'file:../command-builder",
                "we can create command like ng run builder-test:copy-package by adding it in angular.json file",

            ]
        }]
    },
    {
        question: "pass data on navigation",
        responses: [{
            value: "const navigationExtraData = this.router.getCurrentNavigation()",
            desc: [
                "this.router.navigate(['home'], data); pass data read in home component //navigationExtraData.extras.data"
            ]
        }]
    },
    {
        question: "Zone.js",
        responses: [{
            value: "It work similar to javascript event loop",
            desc: [
                " JavaScript event loop",
                " Its contain Heap,Stack and Queue",
                " Heap :- Its has all the data in it like object",
                " stack :- When our code execute function get stored in stack.",
                "Function calls form a stack of frame set",
                " Queue :- Queue store the message, message is link to function and it call the function",
                "Runtime handle the message from old one. message get removed",
                "from queue and its function get called",
                "calling a function creates a new stack frame for that",
                "function's use",
                "The processing of functions continues until the stack is once again empty",
                "Then, the event loop will process the next message in the queue (if there is one)",
                "while (queue.waitForMessage()) {",
                "queue.processNextMessage()",
            ],
        },
        {
            value: "message :- setTimeout, setInterval, event",
            desc: [
                "  messages are added anytime an event occurs and there is an event listener attached to it",
                "  If there is no listener, the event is lost",
                "  If 1 message is being held then other have to w8.  ",
                "  setTimeout called with 2 parameter. seconde parameter tell add this to queue after this time",
            ]
        },
        {
            value: "Zone :-  A zone is an execution context that persists across async tasks.",
            desc: [
                " Angular handle the async operation like setInterval,setTimeout,promise,event in zone after that it trigger the change detection		   ",
                " While Zone.js can monitor all the states of synchronous and asynchronous operations Angular additionally provides a service called NgZone",
                "ngZone.runOutsideAngular(func) => does to trigger change detection ",
                "ngZone.run(func) => detect changes run. There are some 3rd party API zone does not handle e.g 		 ",
                "                    New async API(Event drive API) is not handled by Zone, so you need to use ngZone.run() run change detection",
                " IF you don't want to run change detection on few events like ['scroll', 'mousemove'];			",
                "  create file zone-flags.ts => add =>(window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove'];	",
                "  Import file in  Polyfills.ts  import `./zone-flags`; before import 'zone.js'; ",
                " If you don't want to run change detection on your app automatically then disable it by",
                "                Remove the zone.js import from polyfills.ts:			  ",
                " main.ts => bootstrapModule(AppModule, { ngZone: 'noop' })",

            ]
        }
        ]
    },
    {
        question: "Angular Material",
        responses: [{
            value: "Material Design components for Angular, its new easy to use compare to bootstrap. its new has less feature",
            desc: [
                "  run ng add @angular/material it will add @angular/material && @angular/cdk",
                "  it will add css theme path in angular.json => styles []",
                "  ./node_modules/@angular/material/prebuilt-themes/indigo-pink.css ",
                "  or you can import in .css file  => @import '~@angular/material/prebuilt-themes/indigo-pink.css';",
                "  Add module BrowserAnimationsModule in app.moudle.ts imports. and component you want to use like MatSliderModule,MatTabsModule",
            ]
        }]
    },
    {
        question: "Angular Animation",
        responses: [{
            value: "use for animation. State of element changes from one state to other like 'Open'=>'closed or 'closed'=>'Open' ",
            desc: [,
                "when change the value of isOpen based on 'open','closed','abhi', it will  pick mentioned style with transition delay",
            ]
        },
        {
            image: "animation1.png"
        }
        ]
    },
    {
        question: "Observable",
        responses: [{
            value: "Tt work on producer and consumer logic",
            desc: [
                "RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.",
            ]
        },
        {
            image: "observable1.png",
        },
        {
            value: "Observers :-Observers are just objects with three callbacks	",
            desc: [
                "  {",
                "      next(x) { console.log('got value ' + x); },",
                "      error(err) { console.error('something wrong occurred: ' + err); },",
                "      complete() { console.log('done'); }",
                "    }",
            ]
        },
        {
            value: "RxJS Operators",
            desc: [
                "   Operators are functions. 2 type",
                "   1. Pipeable Operators  :- can be piped - takes oberable gives new observable ",
                "   2. Creation Operators :- standalone function",
                "   const observable = from([1, 2, 3]); array",
                "   of :- Converts the arguments to an observable sequence",
                "          of(1, 2, 3)",
                "        .pipe(map((x) => x * x),filter((v) => !(v % 2)))",
                "        .subscribe((v) => console.log(`value: ${v}`));	",
                "const observable = interval(1000);",
                "var itswllRun4Time = observable.pipe(take(4))	"
            ]
        },
        ]
    },
    {
        question: "Subject",
        responses: [{
            value: "special type of Observable that allows values to be multicasted to many Observers. ",
            image: "subject1.png",
            desc: [
                "        its do the work of both oberable and observer",
                "        Every Subject is an Observable.",
                "        Every Subject is an Observer.",

                "     //  While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.		",
                "     Observable and subject :-Subject is multicasted ,Observable is unicast Observable	",
                "     BehaviorSubject :-	Its maintain the last emitted value when you subscribe it get emitted first",
                "                             const subject = new BehaviorSubject(0); // first value will be 0",
                "                          its always maintain the current value like last next value.",
                "                         ",
                "     ReplaySubject :-  const subject = new ReplaySubject(2); when new subscriber it last 2 value emitted",
                "     AsyncSubject :- const subject = new AsyncSubject(); // when subject.complete() then only last value get emitted",
                "     asyncScheduler :- code run in aync",
                "                       var observable = new Observable((proxyObserver) => {proxyObserver.next(1);proxyObserver.next(2)proxyObserver.complete();",
                "                       }).pipe(observeOn(asyncScheduler));",
            ]
        },]
    },
    {
        question: "<ng-template> and <ng-container>",
        responses: [{
            value: "Use as a grouping element",
            desc: [
                "<ng-template> :- It is never displayed html directly. Use for structural directives such as: ngIf, ngFor, ngSwitch",
                "<ng-container> : simple syntax. can be used directly with html no need of extra directive like *ngIf	"
            ]
        }]
    },
    {
        question: "if else",
        responses: [{
            desc: [
                ' <div *ngIf="condition else elseBlock">div1</div> ',
                ' <div #elseBlock> div2</div> '
            ]
        }]
    },
    {
        question: "Test",
        responses: [{
            value: "Angular uses jasmine and karma for test",
            desc: [
                'In angular.json file test builder get defined',
                'test builder contain entry point for test =>main = src/test.ts',
                'test builder has config file karma.conf.js',
                'Its also contain other file that will get used e.g. style files'
            ]
        },

        {
            value: 'karma.conf.js',
            desc: [
                'configuration file for karma,jasmine, instanbull',
                "Its has port,restartOnFileChange,singleRun,autoWatch",
                'singleRun :true // it run the test close the browser'
            ]
        },
        {
            value: 'test.ts file',
            desc: ["create the environment fot test and Define which file to run"],
            image: 'testtsFile.png'
        },
        {
            value: 'code-coverage',
            desc: [
                "ng test --no-watch --code-coverage",
                'run command it create codecoverage/index.html file  gives coverage'
            ]
        },

        {
            value: 'beforeEach',
            desc: [
                'it get run before every test case.',
                "we need to configure all the module,component.service which our component uses",
                'you can initialize services /component in every test or just in beforeEach'
            ]
        },
        {
            value: "TestBed",
            desc: [
                'testbed dynamically create Angular test module',
                'In angular App DI inject services to our component automatically',
                'we use testbed to inject and create test module',
                'Inject service in module by TestBed.inject(serviceName) or TestBed.get(serviceName)'
            ]
        },

        {
            value: 'HTMLElement',
            desc: [
                'work with browser',
                'const htmlElement: HTMLElement = fixture.nativeElement;'
            ]
        },

        {
            value: 'DebugElement',
            desc: [
                'can work without browser environment',
                'const debugElement: DebugElement = fixture.debugElement;',
                'const htmlElement1: HTMLElement = debugElement.nativeElement',
            ]
        },

        {
            value: 'By.css',
            desc: [
                ' used to select html element in not browser env with DebugElement',
                ' const bannerDe: DebugElement = fixture.debugElement;',
                ' const paragraphDe = bannerDe.query(By.css("p"));',
                ' const p: HTMLElement = paragraphDe.nativeElement;',
            ]
        },
        {
            value: 'fixture.detectChanges',
            desc: [
                'update the value on html'
            ]
        },
        {
            value: 'dispatchEvent',
            desc: [
                '  Change an input value with dispatchEvent()',
                '  when we set value to input even after detectchagnes our comp dont get those value',
                '  nameInput.value = "name change";',
                '  nameInput.dispatchEvent(new Event("input"));',
                '  fixture.detectChanges();',
                '  now angular will update the binding	',
            ]
        },
        {
            value:'Spy',
            desc:[
                'Spy method of service',
                'spyOn(service, "getPromiseData").and.returnValue(Promise.resolve("55551"))'
            ]
        },
        {
            value:'tick()',
            desc:[
                'it will wait until all pending asynchronous activities finish',
                'wait for given time used inside fakeAsync'
            ]
        },
        {
            value:'tick, Async and fakeAsync',
            desc:[
                'To work with async code we use all this'
            ]
        }

        ]
    },
    {
        question: 'Text Example',
        responses: [{
            style:{width:'800px'},
            image:'testExample.png'
        }]
    }
]
}