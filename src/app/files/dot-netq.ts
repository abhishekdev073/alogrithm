export const dataQ = {
    "data": [
        {
            question: 'Razor',
            responses: [{
                value: 'c# coding on view',
            }]
        },

        {
            question: 'Namespace',
            responses: [{
                value: 'group of types  or container',
            }]
        },

        {
            question: 'types',
            responses: [{
                value: 'class,struct,enum,interface,delegate',
            }]
        },

        {
            question: 'type member',
            responses: [{
                value: 'fields,properties,constructors,methods',
                desc: [

                ]
            }]
        },

        {
            question: 'Value and Reference Types',
            responses: [{
                value: 'value type stack,struct,int,bool,byte ,Primitive data types reference type heap-Classes,Delegates,string,interface,object,array,indexes,its default value is null -both stored in ram',
            }]
        },
        {
            question: 'Boxing and Unboxing',
            responses: [{
                value: 'box value type to reference type ; int Val = 1 Object Obj = Val; //Boxing  int i = (int)Obj unboxing',
            }]
        },

        {
            question: 'complier',
            responses: [{
                value: 'compile code to assembly language',
                desc: [

                ]
            }]
        },

        {
            question: 'Interfaces',
            responses: [{
                value: 'signatures of methods, properties, events or indexers.and can be used as dependcy injection,does not support multiple inheritance but can be achieved by interface',
            }]
        },

        {
            question: 'Struct',
            responses: [{
                value: 'value type',
                desc: [

                ]
            }]
        },

        {
            question: 'Value type',
            responses: [{
                value: 'int,float,double,structs,enums,stack',
            }]
        },

        {
            question: 'reference type',
            responses: [{
                value: 'interfaces,class,delegate,array,object,string,heap',
            }]
        },

        {
            question: 'Properties',
            responses: [{
                value: 'Properties are named members of classes, structures, and interfaces',
                desc: [

                ]
            }]
        },

        {
            question: 'Method overloading',
            responses: [{
                value: 'same function name with diff parameters,early binding,Static Polymorphism',
            }]
        },

        {
            question: 'method overriding',
            responses: [{
                value: 'changing the method of base class,virtual method in base class get overridden,late binding',
            }]
        },

        {
            question: 'Method Hiding',
            responses: [{
                value: 'used in inheritance hide method of base class create method in derived class with new keyword',
                desc: [

                ]
            }]
        },
        {
            question: 'Polymorphism',
            responses: [{
                value: 'one sample many form Compile time polymorphism/Overloading ,Runtime polymorphism/Overriding',
                desc: [

                ]
            }]
        },

        {
            question: 'Inheritance',
            responses: [{
                value: 'taking property of one class to another 1 single level,multilevel,does not support multiple inheritance but can be achieved by interface does not support mutiple inheritacne if addCorlor function present in more that on base class and added too much complexity',
            }]
        },

        {
            question: 'Static and Instance class members',
            responses: [{
                value: 'static member can not instantiated,static cant have constructor,fast,Is sealed,Contains only static members',
            }]
        },

        {
            question: 'class',
            responses: [{
                value: 'A class is like a blueprint  It defines the data and behavior of a type,A class is a construct that enables you to create your own custom types by grouping together variables of other types, methods and events',
            }]
        },

        {
            question: 'OBJECT',
            responses: [{
                value: 'A class or struct definition is like a blueprint that specifies what the type can do. An object is basically a block of memory that has been allocated and configured according to the blueprint',
            }]
        },

        {
            question: 'Methods',
            responses: [{
                value: 'A method is a code block that contains a series of statements',
                desc: [

                ]
            }]
        },

        {
            question: 'operators',
            responses: [{
                value: 'public private protected  Access Specifier',
                desc: [
                    'public access in anywhere',
                    'private access in same class only',
                    'protected same class  derived class'
                ]
            }]
        },

        {
            question: 'internal  and protected internal Access Specifier',
            responses: [{
                value: 'internal access in current assembly',
                desc: [
                    'protected Access to current assembly and types derived from containing class'
                ]
            }]
        },

        {
            question: 'reflection',
            responses: [{
                value: 'Runtime Type Information ,Reflection is the ability of a managed code to read its own metadata for the purpose of finding assemblies,It allows late binding to methods and properties',
                desc: [

                ]
            }]
        },

        {
            question: 'attribute [obsulete("msg")]',
            responses: [{
                value: 'is declarative tag convey information at runtime, obsulete discard a particular target element to execute',
            }]
        },

        {
            question: 'Generics',
            responses: [{
                value: 'Generics allow you to delay the specification of the data type of programming elements in a class or a method, until it is actually used in the program,work with any data type',
                desc: [

                ]
            }]
        },

        {
            question: 'string n string builder',
            responses: [{
                value: 'String is immutable ,StringBuilder is mutable',
            }]
        },

        {
            question: 'partial class,method ',
            responses: [{
                value: 'compiler combines  two partial classes into one class ,C# provides the ability to have a single class implementation in multiple .cs',
            }]
        },

        {
            question: 'Indexers',
            responses: [{
                value: 'treat object as array to access its value by index',
            }]
        },

        {
            question: 'Named Arguments',
            responses: [{
                value: 'you can send the arguments in any order by there name showName(name:"abhi",lastName:"yadav").',
            }]
        },

        {
            question: 'Code snippets',
            responses: [{
                value: 'shortcuts code eg model property,constructor',
                desc: [

                ]
            }]
        },

        {
            question: 'array',
            responses: [{
                value: 'fixed size access by index,collection of same data type',
                desc: [

                ]
            }]
        },

        {
            question: 'array list',
            responses: [{
                value: 'contain any data type can grow in size, are boxed and unboxed,it is old',
                desc: [

                ]
            }]
        },

        {
            question: 'list',
            responses: [{
                value: 'grow in size dynamic sized,provide search sort manipulate,strongly typed list of objects that can be accessed by index,no  are boxed and unboxed,new use list',
            }]
        },
        {
            question: 'Stack and Queue',
            responses: [{
                value: 'stack lifo queue lilo',
            }]
        },

        {
            question: 'Threading Protect shared resources,Deadlock ,monitor n lock',
            responses: [{
                value: 'lock keyword ensures that one thread does not enter a critical section of code while another thread is in the critical section.deadlock thread lock the resource which other thread need',
            }]
        },

        {
            question: 'Anonymous Methods',
            responses: [{
                value: 'function without name assign to delegate and we can use it',
            }]
        },

        {
            question: 'Lambda Expressions',
            responses: [{
                value: 'annonymous function  used to create  delegate or expressions',
                desc: [

                ]
            }]
        },

        {
            question: 'Func Delegate',
            responses: [{
                value: 'can point to any type of function no need of delegate',
            }]
        },

        {
            question: 'extension method',
            responses: [{
                value: 'add method to existing type,static method,first parameter is this',
                desc: [
                    "we can add any extra method to datatable like convert into json"
                ]
            }]
        },

        {
            question: 'route.map',
            responses: [{
                value: 'mapped path of url',
            }]
        },

        {
            question: 'checked',
            responses: [{
                value: 'check for overflow not constant value',
                desc: [

                ]
            }]
        },

        {
            question: 'unchecked',
            responses: [{
                value: 'ignore overflow exception',

            }]
        },
        {
            question: 'unsafe code',
            responses: [{
                value: 'u can use pointer',
            }]
        },

        {
            question: 'Data annotations',
            responses: [{
                value: 'used on model class for validation',
            }]
        },

        {
            question: 'Helpers',
            responses: [{
                value: 'run function on view @helpers',
            }]
        },

        {
            question: 'filters',
            responses: [{
                value: 'call filter method before calling actual method action filter,resulter filter , auth filter , excettion filter ,custom filter',
            }]
        },

        {
            question: 'cross site scripting',
            responses: [{
                value: 'trusted user enter javascript code in html',
            }]
        },

        {
            question: 'sql injection',
            responses: [{
                value: 'sql server executed untrusted code',
                desc: [

                ]
            }]
        },

        {
            question: 'cross site request forgery',
            responses: [{
                value: 'attacker send bugged form to user and users post that form',
            }]
        },

        {
            question: 'session fixation',
            responses: [{
                value: ' bugged user machine with session id in cookie,url ,form and users get authenticated with attacker session',
            }]
        },

        {
            question: 'session hijacking',
            responses: [{
                value: 'hijack session by cross site scripting',
                desc: [

                ]
            }]
        },

        {
            question: 'class and struct',
            responses: [{
                value: 'class reference type,and support inheritance struct value ',
            }]
        },

        {
            question: 'dynamic data-type',
            responses: [{
                value: 'stored and type of data decide at run time ,turn off compile-time checking',
            }]
        },
        {
            question: 'stack and heap',
            responses: [{
                value: 'stack at compile time,value type,fast  heap at run time ,slow',
            }]
        }, {
            question: 'viewbag,viewdata,tempdata',
            responses: [{
                value: 'tempdata from action to action ,viewdata from action to view,viewbag wrapper around viewdata',
            }]
        }, {
            question: 'html helper',
            responses: [{
                value: 'execute code and return string as output',
            }]
        }, {
            question: 'virtual method ',
            responses: [{
                value: 'can be redefined in derived classes. override',
            }]
        }, {
            question: 'abstraction method',
            responses: [{
                value: 'modifier indicates that the thing being modified has a missing or incomplete implementation.we have to override it',
            }]
        }, {
            question: 'encapsulation',
            responses: [{
                value: 'classes, properties and access modifiers are tools to provide encapsulation in c#,Encapsulation, in the context of C#, refers to an objects ability to hide data and behavior that are not necessary to its user',
            }]
        }, {
            question: 'assembly',
            responses: [{
                value: 'generated file on compilation dll or .exe',
            }]
        }, {
            question: 'DLL hell',
            responses: [{
                value: 'DLL HELL is the problem where one application will install a newer version of a shared component that is not backward compatible with the version already on the machine.solved with gac by versioning',
            }]
        }, {
            question: 'GAC',
            responses: [{
                value: 'Global Assembly cache -C:\Windows\assembly',
            }]
        }, {
            question: 'Sealed',
            responses: [{
                value: 'cant inherit can write sealed on method',
            }]
        }, {
            question: 'Filters',
            responses: [{
                value: 'execute some logic before or after an action method executes Authorization,Action,Exception,Result filters,',
                desc: [
                    'Global Level at global.asax  ;Controller level ; action level'
                ]
            }]
        }, {
            question: 'diff in encapsulations and abstraction',
            responses: [{
                value: 'Encapsulate hides variables or some implementation that may be changed so often in a class to prevent outsiders access it directly. They must access it via getter and setter methods.',
                desc: [
                    'Abstraction is used to hiding something too but in a higher degree(class, interface). Clients use an abstract class(or interface) do not care about who or which it was, they just need to know what it can do'
                ]
            }]
        }, {
            question: 'generic and non generic collection',
            responses: [{
                value: 'generic collections are strongly typed ,non-generic collections (ArrayList, Hashtable, SortedKist, Queue etc.) in non generic element stored as object first value get boxed and saved and while retrieve value get unboxed',
            }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                value: 'xxxxxxxxxx',
                desc: [

                ]
            }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                value: 'xxxxxxxxxx',
                desc: [

                ]
            }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                value: 'xxxxxxxxxx',
                desc: [

                ]
            }]
        }, {
            question: 'xxxxxxxxxxxxx',
            responses: [{
                value: 'xxxxxxxxxx',
                desc: [

                ]
            }]
        },

    ]
}