export const data = [{
    question: "syntax parser",
    responses: [{
        value: "A program that read your code and determine and what it does and if its grammar is valid",
    }]
},

{
    question: "Lexical environment",
    responses: [{
        value: "where something sit physically in the code you write",
        desc: [

        ]
    }]
},
{
    question: "Execution context",
    responses: [{
        value: " Wrapper to help manage the code that is running, when function is called new execution context is crated",
        desc: [

        ]
    }]
},
{
    question: "Global",
    responses: [{
        value: "Not inside function",
        desc: [

        ]
    }]
}, {
    question: "Hoisting",
    responses: [{
        value: "Memory get allocated for variable and function while Execution context get created",
        desc: [

        ]
    }]
}, {
    question: "Scope",
    responses: [{
        value: "Where variable is available in your code",
        desc: [

        ]
    }]
}, {
    question: "Let",
    responses: [{
        desc: [
            "block scope",
            "not Hoisting",
            "can not redeclare",
            "get different variable in Memory each time loop run"
        ]
    }]
}, {
    question: "Types in JavaScript",
    responses: [{
        value: "1. Primitive Types",
        desc: [
            "types of data that represent single data",
            "that is not a object",
            "Value type we can not change that we have reassign value",
            "Value type"
        ]
    },
    {
        value: "2.Non Primitive Types",
        desc: [
            "Array and object",
            "reference type"
        ]
    }
    ]
}, {
    question: "Dynamic type",
    responses: [{
        value: "We don't tell what kind of data we variable hold its get decided at runtime",
        desc: [

        ]
    }]
},
{
    question: "Object",
    responses: [{
        value: "Key value pair var obj  = new Object()",
        desc: [

        ]
    }]
},
{
    question: "Object literal",
    responses: [{
        value: "var obj = {}",
        desc: [

        ]
    }]
},
{
    question: "Function",
    responses: [{
        value: "Function are object,we can attach property, it has property NAME,CODE ",
        desc: [

        ]
    }]
},
{
    question: "First class function",
    responses: [{
        value: "Everything we can do with other types we can do with function.Assign them to variable,pass them, create them on fly",
        desc: [

        ]
    }]
},
{
    question: "Function statement",
    responses: [{
        value: "don't return anything",
        desc: [

        ]
    }]
},
{
    question: "Function expression",
    responses: [{
        value: "unit of code that results in a value. it doesn't have to save variable",
        desc: [

        ]
    }]
},
{
    question: "Anonymous  function",
    responses: [{
        value: "function does not have name",
        desc: [
            "with reference with a variable"
        ]
    }]
},
{
    question: " Mutated & Immutable",
    responses: [{
        desc: [
            "Mutated :changed, array,object",
            "Immutable :cant changed, primitive type , var let const"
        ]
    }]
},
{
    question: "this",
    responses: [{
        value: "from where function is being called",
        desc: [

        ]
    }]
},
{
    question: "Call Apply and Bind",
    responses: [{
        value: "Change to this",
        desc: [

            "   var changedThis = myFunction.bind(this);changedThis();",
            "   myFunction.call(this,param1,param2);  pass parameter ",
            "    myFunction.apply(this,[param1,param2]); pass array ",
            "///////////////////////////",
            " var obj ={",
            "     name:'abhi',",
            "     print:function(val){  ",
            "      console.log(val,this.name)",
            "   }",
            "   }",
            "   obj.print('hi ')",
            "   var obj2 ={",
            "     name:'rohit'",
            "   }",
            "   obj.print.call(obj2,'hello ')",
        ]
    }]
},
{
    question: "Curring",
    responses: [{
        value: "Crating copy of function parameter with some preset parameter :/ used in mathematical ",
        desc: [
            " function multi(a,b){",
            "     return a*b;",
            " }         ",
            " var multiby2 = multi.bind(this,2);",
            " multiby2(4);",
        ]
    }]
},
{
    question: "Inheritance",
    responses: [{
        value: "Object get access to properties and method of another object",
        desc: [

        ]
    }]
},
{
    question: "Prototype ",
    responses: [{
        value: "All object in JavaScript has property prototype which is reference to other object",
        desc: [
            "it get used by new operator"
        ]
    }]
},
{
    question: "New",
    responses: [{
        value: "var john = new User() , new will create new object var ={} .if you don't return value then JavaScript will return new object that is crated by new",
        desc: [
            "this will get return from the function",
            "Function constructor :-Normal function that is used to construct a object",
            "The 'this' variable point to new empty object. and that object is get return automatically ",
  
        ]
    },
    {
        value: " Construct a object with a function  ",
        image:"./assets/images/new.png",
    },
    ]
},
{
    question: "Inheritance 1",
    responses: [{
        value: "  function User(fname,lname){",
        desc: [
            "     this.name= fname",
            "      this.lName =lname;",
            "  }  ",
        ]
    },
    {
        value: "  User.prototype.getFullName = function(){",
        desc: [
            " return this.name +this.lName;",
            "}"
        ]
    },
    {
        value: "function SmartUser(fname,lname,age){",
        desc: [
            "      User.call(this,fname,lname);",
            "      this.age = age;",
            "  }",
            " SmartUser.prototype =  User.prototype;",
            " //   SmartUser.prototype = Object.create(User.prototype);",
            "   SmartUser.prototype.fullDetail = function(){",
            "          return 'my full details is ' this.name +''+this.lname +'age ='+ this.age;",
            "   }",
            "   var smartUser = new SmartUser('abhishek','yadav',27);",
            "   console.log(smartUser.getFullName())",
            "   console.log(smartUser.name)",
            "   console.log(smartUser.lName)",
            "   console.log(smartUser.age)",
            "   console.log(smartUser.fullDetail())",
        ]
    }
        ,
    {
        value: " Don't use method inside function if we have multiple object function get method get repeated in Memory",
        desc: [
            "User.prototype.getFullName = function(){",
            "return this.name +this.lname;",
            "            }",
            "instead of that Assign that method to prototype it will get crated only once in Memory                             ",
            "Function constructor :-Normal function that is used to construct a object",
            "The 'this' variable point to new empty object. and that object is get return automatically ",
        ]
    },
  
    ]
},
{
    question: " Pure Prototype Inheritance :- ",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [
          "  Var user = {",
          "      name:'default',",
          "      lName:'default',",
          "      getFullName:function(){",
          "          return this.name+ this.lName",
          "      }",
          "  }",
          " var john = Object.create(user)"
        ]
    }]
},
{
    question: "class",
    responses: [{
        value: "JavaScript does not have class internally it uses prototype : its Synthetic sugar around object",
        desc: [

        ]
    }]
},
{
    question: "Inheritance 2 class",
    responses: [{
        desc: [
       "     class User{",
       "         constructor(name,lname){",
       "               this.name = name;",
       "              this.lName = lname;",
       "            }",
       "                getFullName(){",
       "              return this.name + this.lName;",
       "            }",
       "       }",
       "    class SmartUser extends User{",
       "                  constructor(name,lname){",
       "                         super(name,lname);",
       "                         this.age = age;",
       "                   }",
       "                    fullDetail = function(){",
       "                           return 'my full details is +' this.name +' '+this.lname +'age ='+ this.age;",
       "                     }",
       "     }                                    ",
       "            ",
       "    var smartUser = new SmartUser('abhishek','yadav',27);",
       "    console.log(smartUser.getFullName())",
       "    console.log(smartUser.name)",
       "    console.log(smartUser.lName)",
       "    console.log(smartUser.age)",
       "    console.log(smartUser.fullDetail())",
       ]
    }]
},
{
    question:  "use strict",
    responses: [{
        value: "Add extra rule while it parse the code like if we Assign value to variable without declaring it name ='abhishek' throw error",
        desc: [

        ]
    }]
},
{
    question: "Library like jquery",
    responses: [{
        value: "xxxxxxxxxxxx",
        image:"./assets/images/lib-like-jquery.png",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},
{
    question: "33333333",
    responses: [{
        value: "xxxxxxxxxxxx",
        desc: [

        ]
    }]
},

]
