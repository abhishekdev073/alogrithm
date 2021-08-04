export const questions = {
    angular: [{
        question: "AOT",
        responses: [{
            value: "Angular provides two types of compilation:",
            desc: [
                "1.JIT(Just-in-Time) compilation - compiles inside the browser during runtime.",
                "2. AOT(Ahead-of-Time) compilation. compiles during the build time"
            ]
        }]
    },
    {
        question: "Angular Universal",
        responses: [{
            value: "render applications on the server-side :better SEO. fast loading",
            desc: [

            ]
        }]
    },
    {
        question: "async pipe",
        responses: [{
            value: "<div>{{ time | async }}</div>	",
            desc: [
                "when value get resolved by promise or obserable value get printed."
            ]
        }]
    },
    {
        question: "What happens if you use script tag inside template?",
        responses: [{
            value: "angular consider unsafe code and automatically sanitizes it. remove it form view",
            desc: [

            ]
        }]
    },
    {
        question: "What are template statements",
        responses: [{
            value: " A template statement responds to an event raised by a binding target such as an element, component, or directive",
            desc: [
                " <button (click)='editProfile()'>Edit Profile</button>"
            ]
        }]
    },
    {
        question: "What are angular elements",
        responses: [{
            value: "providing a way to use Angular components in non-Angular environments.used as basic html tag	",
            desc: [

            ]
        }]
    },
    {
        question: "What are custom elements",
        responses: [{
            value: "kooo",
            desc: [

            ]
        }]
    },
    {
        question: "What are custom elements",
        responses: [{
            value: "Custom elements (or Web Components) ",
            desc: [
                "which extends HTML	. allowing you to define a tag whose content is created and controlled by JavaScript code"
            ]
        }]
    },
    {
        question: "What is router outlet ",
        responses: [{
            value: " <router-outlet></router-outlet>",
            desc: [
                " <!-- Routed components go here -->	",
                " <a routerLink='/todosList' >List of todos</a>",
                " <a routerLink='/todosList1' routerLinkActive='active'>List of todos</a>",
            ]
        }]
    },
    {
        question: "What is router state",
        responses: [{
            value: "RouterState is a tree of activated routes	",
            desc: [

            ]
        }]
    },
    {
        question: "What is activated route",
        responses: [{
            value: "information about a route associated with a component loaded in an outlet",
            desc: [
                "  constructor(route: ActivatedRoute)",
                "  route.params.pipe(map(p => p.id))",
                "  route.url.pipe(map(segments => segments.join('')))",
                "  route.data.pipe(map(d => d.user))",
            ]
        }]
    },
    {
        question: "What is the purpose of Wildcard route",
        responses: [{
            value: "kooo",
            desc: [
                " { path: '**', component: PageNotFoundComponent }"
            ]
        }]
    },
    {
        question: "What is metadata rewriting",
        responses: [{
            value: "converts the expression initializing the fields such as useClass, useValue, useFactory",
            desc: [

            ]
        }]
    },
    {
        question: "What is the purpose of any type cast function",
        responses: [{
            value: "To disable type error",
            desc: [
                "template:  '{{ $any(user).contacts.email }}'",
                "template:   '{{ $any(this).contacts.email }}'",
            ]
        }]
    },
    {
        question: "Non null type assertion operator",
        responses: [{
            value: "{{contact!.email}} handle null",
            desc: [

            ]
        }]
    },
    {
        question: "What is zone",
        responses: [{
            value: "A Zone is an execution context that persists across async tasks	",
            desc: [
                "Angular relies on zone.js to run Angular's change detection processes when native JavaScript operations raise events"
            ]
        }]
    },
    {
        question: "How to inject the dynamic script in angular",
        responses: [{
            value: "Using DomSanitizer we can inject the dynamic Html,Style,Script,Url.",
            desc: [
                "htmlSnippet: string = this.sanitizer.bypassSecurityTrustScript(<script>safeCode()</script>);",
                "<div [innerHtml]='htmlSnippet'></div>"
            ]
        }]
    },
    {
        question: "Angular Ivy",
        responses: [{
            value: "new rendering engine for Angular",
            desc: [
                "   enable ng new ivy-demo app --enable-ivy",
                "   add in existing project tsconfig.app.json->angularCompilerOptions-> 'enableIvy': true",
                "  Generated code that is easier to read and debug at runtime",
                "  Faster re-build time",
                "  Improved payload size",
                "  Improved template type checking",
                "  used with AOT"
            ]
        }]
    },
    {
        question: "Angular Language Service",
        responses: [{
            value: 'The Angular Language Service is a way to get completions, errors, hints, and navigation inside your Angular templates.',
            desc: [
                "   npm install --save-dev @angular/language-service",
                "   and install vs code extensions angular language service.",
            ]
        }]
    },
    {
        question: "Web workers",
        responses: [{
            value: 'its run in background does not freeze the screen',
            desc: [

            ]
        }]
    },
    {
        question: "codelyzer",
        responses: [{
            value: 'Provides set of tslint rules3',
            desc: [

            ]
        }]
    },
    {
        question: "What are the case types in Angular",
        responses: [{
            value: '23',
            desc: [
                " 1. camelCase  :-Symbols, properties, methods, pipe names, non-component directive selectors,",
                " 2. UpperCamelCase (or PascalCase): Class names, including classes that define components, interfaces, NgModules, directives, and pipes",
                " 3. dash-case (or 'kebab-case'): file names",
                " 4. UPPER_UNDERSCORE_CASE :-All constants",
            ]
        }]
    },
    {
        "question": "Decorators",
        "responses": [{
            "value": "Class Decorators:- @Component({...}),@Directive({...}),@Pipe({...}),@Injectable(),@NgModule()",
            "desc": [
                "field decorators :- @Input() myProperty;  <my-cmp [myProperty]='someExpression'>). ",
                "field decorators :- @Output() myEvent = new EventEmitter();  <my-cmp (myEvent)='doSomething()'>).",
                "@HostBinding('class.valid') isValid;  bind element property",
                "@HostListener('click', ['$event']) onClick(e)  bind event",
            ]
        }]
    },
    {
        question: "What is platform in Angular",
        responses: [{
            value: '',
            desc: [
                "context in which an Angular application runs",
                "it run in browser (platform-browser). it can also run on server (platform-server)",
            ]
        }]
    },
    {
        question: "How do you select an element with in a component template ",
        responses: [{
            value: '@ViewChild',
            desc: [
                "<input #uname>",
                "@ViewChild('uname') input;",
                "console.log(this.input.nativeElement.value);",
            ]
        }]
    },
    {
        question: "How do you detect route change in Angular",
        responses: [{
            value: 'this.router.events.subscribe((event: Event) => {})',
            desc: [

            ]
        }]
    },
    {
        question: "What is the purpose of differential loading in CLI",
        responses: [{
            value: '23',
            desc: [
                "create 2 build ES2015 for modern browser. ES5 syntax for old browser"
            ]
        }]
    },
    {
        question: "How do you upgrade angular version",
        responses: [{
            value: 'ng update //ng update @angular/cli @angular/core',
            desc: [

            ]
        }]
    },
    {
        question: "What are the ways to trigger change detection in Angular",
        responses: [{
            value: '23',
            desc: [
                "You can inject either ApplicationRef or NgZone, or ChangeDetectorRef into your component ",
                "ApplicationRef.tick():change detection run on entire tree",
                "NgZone.run(callback) :-",
                "ChangeDetectorRef.detectChanges() :- run in its component and its children",
            ]
        }]
    },
    {
        question: "change detection",
        responses: [{
            value: 'change detection run and angular update the view',
            desc: [
                "it run because of ",
                "1.When component load call ApplicationRef.tick() ",
                "2.Event listener",
                "3. HTTP request",
                "4. MacroTasks, such as setTimeout() or setInterval()  ",
                "5. MicroTasks, such as Promise.then() 	",
                "6. Other async operations :- WebSocket.onmessage() and Canvas.toBlob()",
            ]
        }]
    },
    {
        question: "difference between interpolated content and innerHTML",
        responses: [
            {
                value: "<div >{{htmlSnippet}}</div> && <div [innerHTML]='htmlSnippet'></div>",
                desc: [
                    " innerHTML get interpreted and script get removed. ",
                    "in interpolation it does not get interpreted print as text content	want to attach html then only innerHTML will work not {{}}	   "
                ]
            }
        ]
    },
    {
        question: "What is RxJS",
        responses: [{
            value: "RxJS is a library for composing asynchronous and callback-based code using Observables it uses operators for processing observables.",
            desc: [

            ]
        }
        ]
    },
    {
        question: "What is an observable",
        responses: [{
            value: "An Observable is a unique Object similar to a Promise that can help manage async code. ",
            desc: [
                "The observables are created using new keyword.its can emit multiple value"
            ]
        }
        ]
    },
    {
        question: "What is an observer?",
        responses: [{
            value: " Consumer what will get",
            desc: [
         "       Observer is an interface for a consumer of push-based notifications delivered by an Observable	",
         "      const observer = {",
         "     next: x => console.log('Observer got a next value: ' + x),",
         "     error: err => console.error('Observer got an error: ' + err),",
         "     complete: () => console.log('Observer got a complete notification'),",
            "}"
            ]
        }
        ]
    },
    {
        question: "What is the difference between promise and observable",
        responses: [{
            value: "adf",
            desc: [
            "    Observable	",
            "    Declarative: it will not run until you subscribe it",
            "    Provide multiple values over time",
            "    Provides chaining and subscription to handle complex applications",
            "    Promise",
            "    Execute immediately on creation",
            "    Provide only one",
            ]
        }
        ]
    },
    {
        question: "subject",
        responses: [{
            value: " While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast",
            desc: [

            ]
        }
        ]
    },
    {
        question: "What are observable creation functions ",
        responses: [{
            desc: [
            "    from a promise :-const observable = from(fetch('/api/endpoint')); ",
            "    from counter:-  const observable = ajax('/api/data');",
            "    from an event:-  const el = document.getElementById('custom-element');",
            "                     const observable = fromEvent(el, 'mousemove'); ",
            "    form ajax   :-   const observable = ajax('/api/data')	",
            ]
        }
        ]
    },
    {
        question: "asdf",
        responses: [{
            value: "adf",
            desc: [

            ]
        }
        ]
    },
    {
        question: "asdf",
        responses: [{
            value: "adf",
            desc: [

            ]
        }
        ]
    },

    {
        question: "asdf",
        responses: [{
            value: "adf",
            desc: [

            ]
        }
        ]
    },

    ]
}