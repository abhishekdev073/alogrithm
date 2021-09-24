export const dataQ = [

    {
        question: "possible ways to create objects in JavaScript",
        responses: [{
            image: '/objectcreation.png',
        }]
    },
    {
        question: "Implicit Type Coercion",
        responses: [{
            desc: [
                "   var x = 3;",
                "   var y = '3;",
                "   x + y // Returns '33' ",
            ]
        }]
    },
    {
        question: "Higher Order Functions",
        responses: [{
            value: "Functions that operate on other functions",
            image: '/higherOrderFunction.png',
            desc: [

            ]
        }]
    },
    {
        question: "this",
        responses: [{
            desc: [
                ' The “this” keyword refers to the object that the function is a property of.',
                ' The value of “this” keyword will always depend on the object that is invoking the function.',
                ' From where its been called',
            ]
        }]
    },
    {
        question: "memoization",
        responses: [{
            value: "function cache the value",
            desc: [

            ]
        }]
    },
    {
        question: "constructor function",
        responses: [{
            value: "create objects in javascript",
        }]
    },

    {
        question: "classes",
        responses: [{
            value: "syntactic sugars for constructor functions.",
            image: '/class.png',
        }]
    },
    {
        question: "Set & Weakset",
        responses: [{
            image: '/set.png',

        }]
    }, {
        question: "Map and weeakMap",
        responses: [{
            image: '/map.png',
        }]
    }, {
        question: "Temporal Dead Zone",
        responses: [{
            value: "trying to access a variable before it is initialized(let const).",
            desc: [
                "x = 23; // Gives reference error",
                "let x;"
            ]
        }]
    }, {
        question: "use fo closer ",
        responses: [{
            image: '/closer.png',
        }]
    }, {
        question: "lambda or arrow functions",
        responses: [{
            value: "function is a shorter syntax don't have this, arguments, super, or new.target",
        }]
    }, {
        question: "first order function",
        responses: [{
            value: "function don't accept or return function",
        }]
    }, {
        question: "first class function",
        responses: [{
            value: "function is treated as var. we can pas, assign  and call",
        }]
    }, {
        question: "higher order function",
        responses: [{
            value: "function accept and return function",
        }]
    }, {
        question: "unary function",
        responses: [{
            value: "Accept 1 arguments const unaryFunction = a => console.log (a + 10);",
        }]
    }, {
        question: "IndexedDB",
        responses: [{
            value: "client-side storage of larger amounts of structured data ",
        }]
    },
    {
        question: "What is promise chaining",
        responses: [{
            value: "asdf",
            image: "/promise.png",
        }]
    },
    {
        question: "Promise.race ",
        responses: [{
            value: "like promise.all -> Only return which promise got resolved first",
        }]
    },
    {
        question: "double exclamation(!!)",
        responses: [{
            value: "resulting type is a boolean. !!(e.g. 0, null, undefined, etc.) false",
        }]
    },
    {
        question: "Eval",
        responses: [{
            value: "evaluates JavaScript code represented as a string eval('console.log(eval('1 + 2'));') ",
        }]
    },
    {
        question: "event flow",
        responses: [{
            desc: [
                "Top to Bottom(Event Capturing)  ",
                "Bottom to Top (Event Bubbling)  ",
            ]
        }]
    },
    {
        question: "Object.freeze(object)  Object.seal(object);",
        responses: [{
            desc: [
                "Can not add new property to object in both case.",
                "In seal we can changes existing property",
                "In seal we can can't change property",
            ]
        }]
    },
    {
        question: "enumerable key and value pairs",
        responses: [{
            value: "for (let [key, value] of Object.entries(object)) {} ",
            desc: [

            ]
        }]
    },
    {
        question: "get the list of keys of any object",
        responses: [{
            value: "Object.keys(user)",
            desc: [

            ]
        }]
    },
    {
        question: "What are javascript accessors,Get , Set",
        responses: [{
            image: "/accessors.png",
        }]
    },
    {
        question: "nullish coalescing operator",
        responses: [{
            value: "returns its right-hand side operand when its left-hand side operand is null or undefined",
            desc: [
                "  console.log(null ?? true); // true",
                "  console.log(false ?? true); // false",
                "  console.log(undefined ?? true); // true",
            ]
        }]
    },
    {
        question: " easiest way to ignore promise errors",
        responses: [{
            value: " await promise.catch(e => void e);",
            desc: [

            ]
        }]
    },
    {
        question: "How to detect if a function is called as constructor",
        responses: [{
            value: "new.target => called with new",
        }]
    },
    {
        question: "Proper Tail Call",
        responses: [{
            value: "it work like recursions but does not create stack like recursion",
            desc: [

            ]
        }]
    },
    {
        question: "Promise error handle",
        responses: [{
            image: '/promiseError.png',
        }]
    },
    {
        question: "Function constructor and function declaration",
        responses: [{
            image: "/function1.png",
        }]
    },
    {
        question: "How to cancel a fetch request",
        responses: [{
            value: "AbortController",
            image: "/abortController.png",
        }]
    },
    {
        question: "enhanced object literals",
        responses: [{
            desc: [
                "//ES6",
                "var x = 10, y = 20",
                "obj = { x, y }",
                "console.log(obj); // {x: 10, y:20}",
                "//ES5",
                "var x = 10, y = 20",
                "obj = { x : x, y : y}",
                "console.log(obj); // {x: 10, y:20}"
                ]
        }]
    },
    {
        question: "swap variables in destructuring assignment ",
        responses: [{
            desc: [
               " var x = 10, y = 20;",
               " [x, y] = [y, x];",
               " console.log(x); // 20",
               " console.log(y); // 10",
            ]
        }]
    },
    {
        question: "template literals",
        responses: [{
            value: "`abhishek yadav`",
        }]
    },
]