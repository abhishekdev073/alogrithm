export const data = {
    "data": [{
        question: 'Object-orientated',
        responses: [{
            value: 'it contains encapsulation, inheritance, and polymorphism',
        }]
    },
    {
        question: 'Polymorphism',
        responses: [{
            value: 'Function act as different',
            desc: [
                'Compile time => Overloading',
                'Runtime Overriding'
            ]
        }]
    },
    {
        question: 'inheritance',
        responses: [{
            value: 'taking property of one class to another 1 single level, multilevel',
            desc: [
                'does not support multiple inheritance but can be achieved by interface'
            ]
        }]
    },
    {
        question: 'encapsulation',
        responses: [{
            value: 'classes, properties and access modifiers are tools to provide encapsulation in c#',
            desc: [
                'Encapsulation, in the context of C#, refers to an object s ability to hide data and behavior that are not necessary to its user '
            ]
        }]
    },
    {
        question: 'type',
        responses: [{
            value: 'The fundamental building block in C#  unit of data and functions called a type',
            desc: [
                ' class,struct,enum,interface,delegate'
            ]
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
        question: 'delegate',
        responses: [{
            value: ' pointer to the function, Functions can be treated as values',
            desc: [
                'Using delegates, C# allows functions to be passed as values to and from other functions.',
                'like callback'
            ]
        }]
    },
    {
        question: 'Type Safety',
        responses: [{
            value: 'We define the type at compile time int/string',
        }]
    },
    {
        question: 'Memory Management',
        responses: [{
            value: ' C# relies on the runtime to perform automatic memory management',
            desc: [
                'The Common Language Runtime has a garbage collector reclaiming memory for objects that are no longer referenced.'
            ]
        }]
    },
    {
        question: 'Common Language Runtime (CLR)',
        responses: [{
            value: 'provides runtime services such as automatic memory management and exception handling',
        }]
    },
    {
        question: 'C# is called a managed language ',
        responses: [{
            value: 'because it compiles source code into managed code, which is represented in Intermediate Language (IL).',
            desc: [
                'The CLR converts the IL into the native code of the machine, such as X86 or X64(Just-In-Time (JIT) compilation)						  '
            ]
        }]
    },
    {
        question: 'assembly',
        responses: [{
            value: 'generated file on compilation dll or .exe',
            desc: [
                'The container for managed code is called an assembly'
            ]
        }]
    },
    {
        question: 'Dot net framework',
        responses: [{
            value: 'Three layers',
            desc: [
                'Application framework :-Api for web(asp.net core,wpf,xamrin)',
                'Base Class Libraries (BCL) :- lower level functionality (Collection,threading,I/O,networking,XML/Json)',
                'CLR:- lower level functionality (Collection,threading,I/O,networking,XML/Json)		  ',
            ]
        }]
    },
    {
        question: 'Instance versus static members ',
        responses: [{
            value: 'instance method will be different for each instance. static will be same for all',
            image: 'instance_vs_static.png',
            desc: [

            ]
        }]
    },
    {
        question: 'Array',
        responses: [{
            value: 'xxxxxxxxxxxxxxxx',
            image: 'array.png'
        }]
    },
    {
        question: 'Rectangular arrays  vs Jagged arrays ',
        responses: [{
            value: 'Jagged array inner length of array can be different',
        }]
    },
    {
        question: 'Variables and Parameters',
        responses: [{
            value: 'value, ref, out, or in',
            desc: [

            ]
        },
        {
            value: ' To pass by reference',
            desc: [
                'Foo(ref x); =>Foo (ref int p)'
            ]
        },
        {
            value: 'out modifier',
            desc: [
                '     similar to ref. condition',
                '     1. Dont assign doing to function',
                '     2. Second function should assign the value',
                '     Foo(out x); =>Foo (out int p)',
            ]
        }, {
            value: 'in modifier',
            desc: [
                'similar to ref. condition',
                'argument’s value can not modified by the method	   ',
                'Foo(in x); =>Foo (in int p)',
                'helpful in passing of large size data because it does not copy.',
                'and it can not change as well',
            ]
        },
        {
            value: 'The params modifier',
            desc: [
                '  method accepts any number of arguments of a particular type',
                '  Sum (1, 2, 3, 4); =>Sum (params int[] ints)',
            ]

        },
        {
            value: 'Optional parameters',
            desc: [
                'Foo() =>    Foo (int x = 23)'
            ]
        },
        {
            value: 'Named arguments',
            desc: [
                'Foo (x:1, y:2) =>Foo (int x, int y)'
            ]
        },
        {
            value: ' Ref Locals',
            desc: [
                'int[] numbers = { 0, 1, 2, 3, 4 };',
                '  ref int numRef = ref numbers [2] ',
                '  change numRef  and numbers will get changed',
            ]
        },

        ]
    },
    {
        question: 'Stack and the Heap ',
        responses: [{
            value: 'Stack',
            desc: [
                'memory for storing local variables and parameters',
                'grows and shrinks as a method or function is entered and exited'
            ]
        }, {
            value: 'Heap',
            desc: [
                ' memory in which objects (i.e., reference-type instances) store.',
                ' a new object is created it is allocated on the heap, and a reference to that',
                '  object is returned	',
                ' The runtime has a garbage collector check of unused reference and remove it from memory',
            ]
        }]
    },
    {
        question: 'Null-Coalescing Operator',
        responses: [{
            value: 'string s2 = s1 ?? "nothing";',
            desc: [
                ' Null-Coalescing Assignment Operator =>myVariable ??= someDefault; // if myVariable is empty then it get someDefault value',
                ' Null-Conditional Operator :- sb?.ToString();',
            ]
        }]
    },
    {
        question: 'Namespace',
        responses: [{
            value: ' group of types  or container',
            desc: [
                '     A namespace is a domain for type names.',
                '     easier to find and avoiding conflicts',
                '      Namespaces are independent of assemblies, 	 ',
                '    The using Directive :-imports a  // using System',
                '   using static :- static directive imports a type rather than a namespace. ',
                '//using static System.Console',
                '  WriteLine ("Hello");',
                '  Repeated namespaces => we can same type name until there type is matches // e.g. both have same class',
            ]
        }]
    },
    {
        question: 'Class',
        responses: [{
            value: 'internal, abstract, sealed, static, unsafe, and partial',
            image: 'class.png'
        }]
    },
    {
        question: 'static readonly vs const',
        responses: [{
            value: 'Const value can not changed but static readonly can changed',
            desc: [
                '  static readonly DateTime StartupTime = DateTime.Now;',
                '  const double twoPI = 2 * System.Math.PI;',
                '  public const decimal ProgramVersion = 2.3;	// not preferable',
                ' // supppose other assembly using this even after we changed it 2.4 it will be 2.3',
                '   for other assembly untill it compile ',
            ]
        }]
    },
    {
        question: 'Methods',
        responses: [{
            value: 'performs an action in a series of statements'
        }]
    },
    {
        question: 'Overloading methods ',
        responses: [{
            desc: [
                'void Foo (int x) {...}',
                'void Foo (double x) {...}',
                'void Foo (int x, float y) {...}',
                'void Foo (float x, int y) {...}'
            ]
        }]
    },
    {
        question: 'Overloading constructors',
        responses: [{
            value: ' A class or struct may overload constructors.',
            image: 'constructor.png',
            desc: [
                'To avoid code duplication, one constructor can call another, using the this keyword'
            ]
        }]
    },
    {
        question: 'Deconstructors',
        responses: [{
            value: 'opposite to a constructor',
            desc: [
                'whereas a constructor typically takes a set of values (as parameters) and assigns them to fields, a deconstructor does the reverse and assigns fields back to a set of variables.',
                ' used with out',
                ' public void Deconstruct (out float width, out float height)',
                ' var rect = new Rectangle (3, 4);',
                ' (float width, float height) = rect; ',
                ' or',
                ' float width, height;',
                ' rect.Deconstruct (out width, out height);',
                ' or ',
                ' rect.Deconstruct (out var width, out var height);',
            ]
        }]
    },
    {
        question: 'Properties',
        responses: [{
            value: 'Properties look like fields from the outside, but internally they contain logic, like methods do',
            image: 'prop.png'
        }]
    },
    {
        question: 'Static Constructors',
        responses: [{
            value: 'A static constructor executes once per type rather than once per instance',
            desc: [
                'A type can define only one static constructor',
                'it must be parameterless and have the same name as the type',
                'A type can',
                ' define only one static constructor, and it must be parameterless and have the sam',
                ' name as the type',
                ' Two things trigger this',
                '  1.Instantiating the type',
                '  2.Accessing a static member in the type',
            ]
        }]
    },
    {
        question: 'Static Classes',
        responses: [{
            value: 'A class can be marked static',
            desc: [
                '  must be composed solely of static members',
                '  cannot be subclassed.	',
                '  e.g  System.Console and System.Math ',
            ]
        }]
    },
    {
        question: 'partial class,method',
        responses: [{
            value: 'compiler combines  two partial classes into one class, C# provides the ability to have a single class implementation in multiple .cs',
            desc: [
                '    .should be in same assembly and namespace.',
                '    Can separate the code',
                '    multiple developer can work on same file',
                '    Partial Methods :- It has one declaration and  definition, can be in same file or in different file',

            ]
        }]
    },
    {
        question: 'Upcasting',
        responses: [{
            value: 'creates a base class reference',
            desc: [
                '    Stock msft = new Stock(); //Stock sub class class',
                '    Asset a = msft;  // asset base class. can not access value of stock ',
            ]
        }]
    },
    {
        question: 'Downcasting',
        responses: [{
            desc: [
                'creates a subclass reference',
                'Stock msft = new Stock();',
                'Asset a = msft; // Upcast',
                'Stock s = (Stock)a; // now can access value of base and subclass',
            ]
        }]
    },
    {
        question: 'Virtual Function Members',
        responses: [{
            value: 'A function marked as virtual can be overridden by subclasses wanting to provide a specialized implementation',
            desc: [
                'public virtual decimal Liability => 0; // Base Class',
                'public override decimal Liability => Mortgage; // Sub Class  ',
            ]
        }]
    },
    {
        question: 'abstraction method',
        responses: [{
            value: 'modifier indicates that the thing being modified has a missing or incomplete implementation.we have to override it	',
            desc: [
                ' public abstract decimal NetValue { get; } // base class',
                ' public override decimal NetValue => CurrentPrice * SharesOwned;// sub class',
            ]
        }]
    },
    {
        question: 'Hiding Inherited Members',
        responses: [{
            value: 'same property in used in parent and child. we want hide property of parent',
            desc: [
                '   public class A { public int Counter = 1; } \\ Base class',
                '   public class B : A { public new int Counter = 2; } \\ sub class',
            ]
        }]
    },
    {
        question: 'new versus override ',
        responses: [{
            value: 'overide will even overide the parent class method but  not new',
        }]
    },
    {
        question: 'Sealing Functions and Classes :',
        responses: [{
            value: 'overridden function member can seal its implementation with the sealed key',
            desc: [
                'word to prevent it from being overridden by further subclasses   ',
                'public sealed override decimal Liability { get { return Mortgage; } }',
            ]
        }]
    },
    {
        question: 'The base Keyword ',
        responses: [{
            value: 'similar to the this',
            desc: [
                'two essential purposes:',
                '1. Accessing an overridden function member from the subclass',
                '2. Calling a base-class constructor',
            ]
        }]
    },
    {
        question: 'Constructors and Inheritance',
        responses: [{
            value: 'A subclass must declare its own constructors',
            desc: [
                ' public Subclass (int x) : base (x) { }'
            ]
        }]
    },
    {
        question: 'Boxing and Unboxing',
        responses: [{
            value: 'box value type to reference type ',
            desc: [
                ' int Val = 1 Object Obj = Val; //Boxing  int i = (int)Obj unboxing	'
            ]
        }]
    },
    {
        question: 'Structs',
        responses: [{
            value: 'A struct is similar to a class',
            desc: [
                '  A struct is a value type, whereas a class is a reference type.',
                '  A struct does not support inheritance',
            ]
        }]
    },
    {
        question: 'Interfaces',
        responses: [{
            value: 'xxxxxxxxxxxxxxxx',
            desc: [
                '      Interfaces -signatures of methods, properties, ',
                '      events or indexers. and can be used as dependency injection,',
                '     does not support multiple inheritance but can be achieved by interface',
                '   similar to a class but only specifies behavior and does not hold state',
                '                 (data). Consequently',
                '    .Interface members are implicitly abstract.	',
                '   internal class Countdown : IEnumerator :- It should implement all the method of interface	',
            ]
        }]
    },
    {
        question: 'Explicit Interface Implementation',
        responses: [{
            value: 'Implementing multiple interfaces can sometimes result in a collision between member',
            desc: [
                '  resolved by I2.Foo();',
                '  public class Widget : I1, I2',
                '  {',
                '   public void Foo()',
                '   {',
                '   Console.WriteLine ("Widgets implementation of I1.Foo");',
                '   }',
                '   int I2.Foo()',
                '   {',
                '   Console.WriteLine ("Widgets implementation of I2.Foo");',
                '   return 42;',
                '   }',
                '  }',
                '  w.Foo(); // Widgets implementation of I1.Foo',
                '  ((I1)w).Foo(); // Widgets implementation of I1.Foo',
                '  ((I2)w).Foo(); // Widgets implementation of I2.Foo	',
            ]
        }]
    },
    {
        question: 'Generics',
        responses: [{
            value: 'Generics allow you to delay the specification of the data type of programming elements in a class or a method,',
            desc: [
                'until it is actually used in the program,work with any data type'
            ]
        }]
    },
    {
        question: 'Delegates',
        responses: [{
            value: 'callback function',
            desc: [
                '   A delegate is an object that knows how to call a method.',
                '   it defines the method’s return type and its parameter types.',
                '   delegate int Transformer (int x);// it can be used with any mehtod with parameter int and return type int',
                '   static int Square (int x) { return x * x}; ',
                '   Transformer t = Square;',
                '   int answer = t(3); //9',
            ]
        }]
    },
    {
        question: 'Multicast Delegates',
        responses: [{
            value: 'call all return first one',
            desc: [
                '    can add list of target methods, can store multiple callback  ',
                '    The + and += operators combine delegate instances',
                '          delegate  int Transformer(int x);	  ',
                '          Transformer del = function2;',
                '          del =del+ function1;',
                '          var x = del(9);',
                '          ',
                '       static int function2(int a)',
                '      {',
                '         ',
                '          return a + 10;',
                '      }',
            ]
        }]
    },
    {
        question: 'Generic Delegate Types',
        responses: [{
            desc: [
                '  public delegate T Transformer<T>(T arg);	',
                '  Transformer<int> del = function2;',
                '  del = del+ function1;',
                '  var x = del(9);	',
            ]
        }]
    },
    {
        question: 'The Func and Action Delegates',
        responses: [{
            value: 'to store delegate we have to create generic every time',
            desc: [
                '  Func is already generic is defined we can use that to reference and call method			',
                '  Func<int,int> del = function2// take tha parameter int and return int',
                '   del =del+ function1;',
            ]
        }]
    },
    {
        question: 'Event',
        responses: [{
            value: 'work with delegate broadcaster and subscriber',
        }]
    },
    {
        question: 'Lambda Expression',
        responses: [{
            value: ' A lambda expression is an unnamed method written in place of a delegate instance	   ',
            desc: [
                '    delegate int Transformer (int i);',
                '    Transformer sqr = x => x * x;  ',
                '    sqr(3)',
                '    or Func<int,int> sqr = x => x * x;',
                '     Func<int, int> multiplier = n => n * factor;',
            ]
        }]
    },
    {
        question: ' Anonymous Methods',
        responses: [{
            value: 'An anonymous method is like a lambda expression, but it lacks the following features:',
            desc: [
                '  Implicitly typed parameters',
                '  Expression syntax (an anonymous method must always be a statement block)',
                '  The ability to compile to an expression tree, by assigning to Expression<T>',
                '  delegate int Transformer (int i);',
                '  Transformer sqr = delegate (int x) {return x * x;};',
            ]
        }]
    },
    {
        question: 'LINQ',
        responses: [{
            value: 'Language-Integrated Query',
            image: 'linq.png'
        }]
    },
    {
        question: 'Query Expressions',
        responses: [{
            value: 'shortcut for writing LINQ queries',
            desc: [
                ' string[] names = { "Tom", "Dick", "Harry", "Mary", "Jay" };',
                ' IEnumerable<string> query =',
                ' from n in names',
                ' where n.Contains ("a") // Filter elements',
                ' orderby n.Length // Sort elements',
                ' select n.ToUpper(); // Translate each element (project)',
                ' foreach (string name in query) Console.WriteLine (name);	',
                ' int matches = (from n in names where n.Contains ("a") select n).Count();',
            ]
        }]
    },
    {
        question: 'Subqueries',
        responses: [{
            value: 'xxxxxxxxxxxxxxxx',
            desc: [
                '                musos.OrderBy (m => m.Split().Last());',
                '                names',
                '    .Where (n => n.Length == names.OrderBy (n2 => n2.Length)',
                '    .Select (n2 => n2.Length).First())',
                '                        ',
                '                    IEnumerable<string> query = names',
                '    .Select (n => n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                '    .Replace ("o", "").Replace ("u", ""))',
                '    .Where (n => n.Length > 2)',
                '    .OrderBy (n => n);',
                '   ',
                '   IEnumerable<string> query = names',
                '    .Select (n => n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                '    .Replace ("o", "").Replace ("u", ""))',
                '    .Where (n => n.Length > 2)',
                '    .OrderBy (n => n);',
            ]
        }],
    },
    {
        question: 'The into Keyword',
        responses: [{
            desc: [
                '  IEnumerable<string> query =',
                '  from n in names',
                '  select n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                '  .Replace ("o", "").Replace ("u", "")',
                '  into noVowel',
                '  where noVowel.Length > 2 orderby noVowel select noVowel;',
                '  ',
                '  IEnumerable<string> query =',
                '  from n1 in',
                '  (',
                '  from n2 in names',
                '  select n2.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                '  .Replace ("o", "").Replace ("u", "")',
                '  )',
                '  where n1.Length > 2 orderby n1 select n1;',
            ]
        }]
    },
    {
        question: 'Object Initializers',
        responses: [{
            value: 'xxxxxxxxxxxxxxxx',
            desc: [
                '   from n in names',
                '   select new TempProjectionItem',
                '   {',
                '   Original = n,',
                '   Vowelless = n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                '   .Replace ("o", "").Replace ("u", "")',
                '   }',
                '   ',
                '   var intermediate = from n in names',
                '   select new',
                '   {',
                '   Original = n,',
                '   Vowelless = n.Replace ("a", "").Replace ("e", "").Replace ("i", "")',
                '   .Replace ("o", "").Replace ("u", "")',
                '   };',
            ]
        }]
    },
    {
        question: 'Interpreted Queries',
        responses: [{
            value: ' An example is Microsoft’s Entity Framework ',
            desc: [
                '                Query database',
                '                IQueryable<string> query = from c in dbContext.Customers',
                'where c.Name.Contains ("a")',
                'orderby c.Name.Length',
                'select c.Name.ToUpper()',
                '',
                'IQueryable<string> query = dbContext.customers',
                '.Where (n => n.Name.Contains ("a"))',
                '.OrderBy (n => n.Name.Length)',
                '.Select (n => n.Name.ToUpper());',
                '',
                'IQueryable<Book> query = dbContext.Books',
                '.Where (b => b.Title.Contains ("mercury"))',
                '.OrderBy (b => b.Title)',
                '.Skip (20).Take (20);',
            ]
        }]
    },
    {
        question: 'Disposal and Garbage Collection',
        responses: [{
            value: 'class Test : IDisposable',
            desc: [
                '                IDisposable, Dispose, and Close :- public interface IDisposable',
                '                using statement',
                '                 it handle the memory',
                'CLR clear the heep automatically',
            ]
        }]
    },
    {
        question: 'Forcing Garbage Collection',
        responses: [{
            desc: [
                'GC.Collect();',
                'GC.WaitForPendingFinalizers();',
                'GC.Collect();',
            ]
        }]
    },
    {
        question: 'Managed Memory Leaks',
        responses: [{
            value: 'CLR manually deallocate',
            desc: [
                '       memory when an object is no longer required',
                '       .some objects require explicit tear-down code to release resources such as open files,',
                '               locks, operating system handles, and unmanaged objects',
                '        . this is called disposal, and it is supported through the IDisposable interface	',
                '        .C#’s using statement provides a syntactic shortcut for calling Dispose on objects',
                '           that implement IDisposable, using a try/finally block:  ',
                '           using (FileStream fs = new FileStream ("myFile.txt", FileMode.Open))',
                '           it get comiled into ',
                '            finally',
                '      {',
                '       if (fs != null) ((IDisposable)fs).Dispose();',
                '      }',
            ]
        }]
    },
    {
        question: 'Close and Stop',
        responses: [{
            value: 'Some types define a method called Close in addition to Dispose.',
            desc: [
                '  IDbConnection => close can be reopened',
                '  Timer or HttpListener => stop => can be start again',
            ]
        }]
    },
    {
        question: 'three scenarios for not disposing',
        responses: [{
            desc: [
                '   1. When you don’t “own” the object; for example, when obtaining a shared object',
                '   via a static field or property	-  System.Drawing namespace - Brushes.Blue ',
                '     Because same instance are used throughout the life of the',
                '   application ',
                '           2.When an object’s Dispose method does something that you don’t want',
                '           3.When an object’s Dispose method is unnecessary by design, and disposing that',
                '   object would add complexity to your program',
            ]
        }]
    },
    {
        question: 'MemoryStream,StreamReader,StreamWriter,IDbConnection,DbContext',
        responses: [{
            value: 'they all have disposal call if you dont need them',
            desc: [

            ]
        }]
    },
    {
        question: 'unsubscribe',
        responses: [{
            value: 'good practice to unsubscribe from events that the object has subscribed to internally over its lifetime(e,g signalR)',
        }]
    },
    {
        question: 'Dispose method',
        responses: [{
            desc: [
                '   A Dispose method itself does not cause (managed) memory ',
                '   to be released—this can happen only in garbage collection',
                '   dispose method mark memorery unsued and garbage collection free the memory',
            ]
        }]
    },
    {
        question: 'Garbage collection',
        responses: [{
            desc: [
                'Garbage collection does not happen immediately after an object is orphaned	   ',
                'it happens periodically :-not to a fixed schedule.',
                '  run time depend on available memory, the amount of memory allocation,',
                '  and the time since the last collection',
            ]
        }]
    },
    {
        question: 'Generational collection',
        responses: [{
            value: 'GC divides the managed heap into three generations.',
            desc: [
                '  Gen0 :-(short lived-small size)  Objects that have just been allocated	',
                '  Gen1 :-(short lived- small size)  objects that have survived one collection cycle 	',
                '  Gen 2:- others',
            ]
        }]
    },
    {
        question: 'The Large Object Heap(LOH)',
        responses: [{
            value: 'Larged object get saved in LOH :- can not allowd to save in gen0 because we access gen0 more.',
            desc: [
                '     The LOH is subject to fragmentation :- Large object assing in this when it goes space is left there',
                '     we can compact LOH',
                '       GCSettings.LargeObjectHeapCompactionMode =',
                '         GCLargeObjectHeapCompactionMode.CompactOnce	',
            ]
        }]
    },
    {
        question: 'Forcing Garbage Collection',
        responses: [{
            value: '-GC.Collect() => run on full collection ',
            desc: [
                ' GC.Collect(0) => run on gen0 ',
                ' GC.Collect();',
                ' GC.WaitForPendingFinalizers();',
                ' GC.Collect();',
                ' // try to avoid it. we can use it in services like it run once in 1 day',
                '   after doing task we can call GC',
            ]
        }]
    },
    {
        question: 'Array Pooling',
        responses: [{
            desc: [
                '    If your application frequently instantiates array',
                '    you can avoid most of the garbage collection overhead with array poolin',
            ]
        }]
    },
    {
        question: 'Managed Memory Leaks',
        responses: [{
            desc: [
                'unused objects remaining alive by virtue of unused or forgotten references',
                'In unmanaged languages such as C++, ',
                'you must remember to manually deallocate memory when you dont need it',
                'In unmanaged languages such as C++, you must remember to manually deallocate ',
                'or memoery leak will happen ',
                ' Timers => Forgetten time cause memory leak timer.start() // but not used timer.stop//timer.dispose()			  ',

            ]
        }]
    },
    {
        question: 'Diagnosing Memory Leaks',
        responses: [{
            desc: [
                '   long memoryUsed = GC.GetTotalMemory(true);',
                '   windbg.exe tool can help	',
                '   microsoft clr profiler',
                '   SciTech’s Memory Profiler,',
                '   Red Gate’s ANTS Memory Profiler.',
            ]
        }]
    },
    {
        question: 'Weak References',
        responses: [{
            value: 'Object wil not get cleared by GC =>System.WeakReference',
            desc: [
                '    If a target is referenced only by one or more weak references, the GC will consider',
                '    the target eligible for collection',
                '    var weak = new WeakReference (new StringBuilder ("weak"));',
                '     var sb = (StringBuilder) weak.Target',
                '     // weak.Target get collected by GC but not sb becuae it been assgined to local',
            ]
        }]
    },
    {
        question: 'Threading',
        responses: [{
            value: 'it gives concurrency',
            desc: [
                '    A thread is an execution path that can proceed independently of others.',
                '    Thread t = new Thread (WriteY); // Kick off a new thread',
                '    t.Start();',
                '    ',
                '    t.join() // wait untill thread is finished',
                '    Thread.Sleep (500);  // pause current thread for specifc time',
                '    lock (_locker) // thread will wait if other thread is processing it ',
            ]
        }]
    },
    {
        question: 'Passing Data to a Thread',
        responses: [{
            desc: [
                '   Thread t = new Thread ( () => Print ("Hello from t!") );',
                '   t.Start();',
                '    new Thread (() =>',
                '    {',
                '     Console.WriteLine ("Im running on another thread!");',
                '     Console.WriteLine ("This is so easy!");',
                '    }).Start();	 ',
                '    ',
                '     Thread t = new Thread (Print);',
                '     t.Start ("Hello from t!");',
            ]
        }]
    },
    {
        question: 'Foreground versus Background Threads',
        responses: [{
            value: 't.IsBackground = true;',
            desc: [
                '     By default :Foreground threads',
                '     Foreground threads keep the application alive for as long as any one of them is running',
                '      IsBackground=true when applcation foreground thread end. end the application and ',
                '       terminate background thread	 ',

            ]
        }]
    },
    {
        question: 'The Thread Pool',
        responses: [{
            value: ' Whenever you start a thread a few hundred microseconds are spent organizing such things as a fresh local variable stack.',
            desc: [
                'The thread pool cuts this overhead by having a pool of pre-created recyclable threads'
            ]
        }]
    },
    {
        question: 'Tasks',
        responses: [{
            value: 'xxxxxxxxxxxxxxxx',
            desc: [
                'it can overcome by task',
                'var taskObject =  Task.Run (() => Console.WriteLine ("Foo"));',
                'Task<int> task = Task.Run (() => { Console.WriteLine ("Foo"); return 3; });',
                'Task.Run returns a Task object that we can use to monitor its progress,',
            ]
        }]
    },
    {
        question: '.Wait',
        responses: [{
            value: 'wait until task is finished',
            desc: [
                '  Task task = Task.Run (() =>',
                '  {',
                '   Thread.Sleep (2000);',
                '   Console.WriteLine ("Foo");',
                '  });',
                '  Console.WriteLine (task.IsCompleted); // False',
                '  task.Wait(); // Blocks until task is complete	',
            ]
        }]
    },
    {
        question: 'Long-running tasks',
        responses: [{
            desc: [
                '     By default, the CLR runs tasks on pooled threads, which is ideal for short-running',
                '     compute-bound work	',
                '       For longer-running and blocking operations you can prevent use of a pooled thread as follows:',
                '        Task task = Task.Factory.StartNew (() => ...,',
                '      TaskCreationOptions.LongRunning);',
            ]
        }]
    },
    {
        question: 'Returning values ',
        responses: [{
            desc: [
                '       Task<int> task = Task.Run (() => { Console.WriteLine ("Foo"); return 3; });',
                '       int result = task.Result; // Blocks if not already finished',
                '       Console.WriteLine (result); // 3 ',
            ]
        }]
    },
    {
        question: 'Continuations',
        responses: [{
            value: 'Work as callback function',
            desc: [
                '  Task<String> task = Task.Run(() => {',
                '      return "hi";',
                '  });',
                '  var abc = task.GetAwaiter();',
                '  abc.OnCompleted(() =>',
                '  {',
                '      var res = abc.GetResult();',
                '      Console.WriteLine(res);',
                '  });	',
            ]
        }]
    },
    {
        question: 'The Roslyn Compiler ',
        responses: [{
            value: 'written in C#, set of modular libraries known as Roslyn',
        }]
    },
    {
        question: 'how to pass data',
        responses: [{
            desc: [
                'ViewBag.name="abhi" =>  @ViewBag.Name',
                'view(model)    @model Mvc.model.momdName  @modelName.Name '
            ]
        }]
    },
    {
        question: 'MVC Application lifeCycle',
        responses: [{
            desc: [
                '  On Application start Global.asax application start method get called',
                '  Webapi, routes get registered here ',
                '  route.Config  =>Instance routetable is created ',
                '  and store on which route which controller action get called',
                '  appStart folder has route.config and webApi.config',
                '  MVCHandler creates a DefaultControllerFactory processes the RequestContext to controller',
                '  we can use UnityControllerFactory custom factory to create custom context.',
                '  Services get injected buy only interface easy for testing',
                '  Once action method get executed view engine render the view',
            ]
        }]
    },
    {
        question: 'ADO.NET',
        style: {
            width: { width: '80%' }
        },
        responses: [
            {
                style: { width: '100%' },
                image: 'ado.PNG'
            },
            {
                style: { width: '100%' },
                image: 'data_adapter.PNG'
            },
            {
                style: { width: '100%' },
                image: 'SP.PNG'
            }
        ]
    },
    {
        question: 'Connection Pooling in ADO.NET ',
        responses: [{
            value: 'reusing your connection to the database instead of always opening and closing connection      ',
        }]
    },
    {
        question: 'differences Between DataReader and DataSet',
        responses: [{
            desc: [
                'DataSet  :-  can modify data. slow lower performance',
                'DataReader :- cannot modify data.fast and better performance '
            ]
        }]
    },
    {
        question: 'SqlCommand',
        responses: [{
            value: 'SqlCommand carries the SQL statement that needs to be executed on the database uses connection object to execute SQL queries',
        },
        {
            value: 'ExecuteScalar',
            desc: [
                'return single value'
            ]
        },
        {
            value: 'ExecuteNonQuery',
            desc: [
                'data manipulation on the database, return value int no of row affected'
            ]
        },
        {
            value: 'ExecuteReader',
            desc: [
                'retrieve rows and columns of data'
            ]
        }
        ]
    },
    {
        question: 'DataAdapter',
        responses: [
            {
                desc: [
                    ' linking the database and connection object',
                    ' communication between Dataset and data sources.',
                    ' Data moves ‘in and out’ of the Dataset through DataAdapter.',
                    ' DataAdapter.fill => get the data ',
                    ' DataAdapter.update => update the data',
                ]
            }
        ]
    },
    {
        question: 'DataSet',
        responses: [
            {
                desc: [
                    'heart of ADO.NET.',
                    'collection of DataTable objects',
                ]
            }
        ]
    },
    {
        question: 'DataView',
        responses: [
            {
                value: 'create different views of the data stored in a DataTable manipulate  filter and/or sort  ',
            }
        ]
    },
    {
        question: 'Solid SRP',
        responses: [{
            value: 'Single Responsibility Principle (SRP)',
            desc: [
                'One function class do only one thing'
            ]

        }
        ]
    },
    {
        question: 'Solid (OCP)',
        responses: [{
            value: 'Open Closed Principle ',
            image: 'ocp.png',
            desc: [
                'classes, modules, functions should be open for extension, but closed for modification.',
                'Avoid changing existing class once its development and testing is done',
                'Use interface or abstract class and extend the new method that you need'
            ]

        }
        ]
    },
    {
        question: 'LSP',
        responses: [{
            value: 'Liskov Substitution Principle',
            image: 'LSP.png',
            desc: [
                'use derived class instead of a parent class behave in the same manner without modification',
                'does not impact parent class'
            ]

        }
        ]
    },
    {
        question: 'ISP',
        responses: [{
            value: 'Interface Segregation Principle (ISP)',
            desc: [
                'dont load the interface instead use sub interface to divide the task'
            ]

        }
        ]
    },
    {
        question: 'DIP',
        responses: [{
            value: 'Dependency Inversion Principle',
            image: 'DIP.png',
            desc: [
                'high-level modules/classes should not depend on low-level modules/classes',
                'Both should depend upon abstractions,',
                'Make code as loosly coupled possible  ',
            ]

        }
        ]
    },
    {
        question: 'Sessions Management',
        responses: [{
            desc: [
                'Inproc :- In momory object ->  stored in worker processes, not work with load balancer',
                'stateserver :- Run by asp.net state service.we give connection string in web.config. It can be differenc server',
                'Sql server :- Session get stored in DB',
                'Custom :- We can use it like JWT',
                'Cookieless :- work without cookie by unique Id in url with inproc',
            ]
        }
        ]
    },
    {
        question: 'WCF',
        responses: [{
            value: 'Windows Communication Foundation ',
            desc: [
                '     IService.cs =>  has all the declarations  call contract',
                '     Operation Contract => operation happened call Operation Contract',
                '                       We can call our custom by using attribute',
                '     Data Contract => transferred and processed within service and they store the values',
                '                    like model . they have data member like model property',
                '      Address, Binding and Contract  => defined web.config  ',
            ]

        }
        ]
    },
    {
        question: 'Web api vs WCF',
        responses: [{
            desc: [
                '   WCF => fast, support all transfer protocol https http and tcp',
             '   web api => slow , rest api ,http and https only. uses web service and attribute  ',

            ]

        }
        ]
    },
    {
        question: 'WCF Concurrency ServiceBehavior',
        responses: [{
            desc: [
             '   [ServiceBehavior(ConcurrencyMode = ConcurrencyMode.Single)]  ',
             '   Single Concurrency Mode =>only 1 thread, others have to wait while it doing processing',
             '                          not allow concurrent calls',
             '                          only one request will proceed at any time',
             '   Multiple Concurrency Mode => allows multiple accesses at the same time',
             '   Reentrant Concurrency Mode =>  like single concurrency mode',
            ]

        }
        ]
    },
    {
        question: '111',
        responses: [{
            value: 'asdf',
            desc: [

            ]

        }
        ]
    },
    {
        question: '111',
        responses: [{
            value: 'asdf',
            desc: [

            ]

        }
        ]
    },
    {
        question: '111',
        responses: [{
            value: 'asdf',
            desc: [

            ]

        }
        ]
    },
    {
        question: '111',
        responses: [{
            value: 'asdf',
            desc: [

            ]

        }
        ]
    },

    ]
}