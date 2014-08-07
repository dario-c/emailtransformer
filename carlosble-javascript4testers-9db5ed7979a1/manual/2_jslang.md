# The JavaScript Language
> "JavaScript, not to be confused with Java, was created in 10 days in May 1995 
> by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was 
> not always known as JavaScript: the original name was Mocha, a name chosen 
> by Marc Andreessen, founder of Netscape. In September of 1995 the name was 
> changed to LiveScript, then in December of the same year, upon receiving a 
> trademark license from Sun, the name JavaScript was adopted. This was somewhat 
> of a marketing move at the time, with Java being very popular around then." 
> - A short [history](http://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript) of JavaScript

The key design principles within JavaScript were taken from the Self and Scheme
programming languages, whereas names and naming conventions were taken from Java.
Its principles along with the lack of built-in design constraints make it a 
multi-paradigm language that is extremely flexible and powerful. But at the same 
time, it can be really hard to learn and maintain if used wrong.

JavaScript went standard in June 1997 when Ecma International published the first
edition of the ECMA-262 specification. The standard JavaScript today is called
ECMAScript. Modern browsers support ECMAScript version 5. 

Native desktop applications provide better user experience than traditional
webs because they react
immediately to user input. However they are hard to deploy whereas the web
is easy to deploy. JavaScript brings the best of both worlds because apps are
deployed via browser but behave like desktop apps. The fact that modern browsers
support the ECMAScript standard is empowering developers to enhance user
experience again.

JavaScript is a programming language that don't even need the web browser to
be useful. In fact, Node.js provides JavaScript in the server side. 
Nevertheless browsers provide specific APIs for JavaScript to manipulate
HTML and CSS among other things. These APIs are the DOM (Document Object Model)
and the BOM (Browser Object Model). The DOM is used for the GUI. 
The W3C (World Wide Web Consortium) standardized the DOM and it's now supported
by all modern browsers. 

## Data types
JavaScript is a dynamic language, variables are defined dynamically and their
type is set based on the value assignment. 
The value types in JavaScript are 
**integers, strings, numbers, booleans, null and undefined**. 
The reference types are **arrays, functions and objects**. 

    var x;        // x is an undefined variable
    var x = null; // x is defined and its value is null
    var x = 7;    // x is an integer
    var objectLiteral = {property1: 'test', property2: 777}; // an object

See more information on data types [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).

## Functions
Functions are the essence of JavaScript, they are first-class citizens in the
language. Functions can be passed in as arguments to other functions and they
can also return other functions.

    function theName(){var sample = 1;} // a named function
    function(){var sample = 1;} // an anonymous function

For a good introduction to functions see the beginning of the JavaScript 
Allongé 
[book](https://leanpub.com/javascript-allonge/read#leanpub-auto-as-little-as-possible-about-functions-but-no-less).

JavaScript functions can be 
[immediately-invoked](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression)

    (function(){/*...*/}())

This is a very common pattern named IIFE (immediately-invoked function expression) 
used to produce lexical scopes as we will see later.

Functions can have nested functions:

    function (){
        /* ... */
        function(){ /*...*/ }
        /* ... */
    }

>## Write your first function
>
> Inside the unit_tests.js file, right on top of the first *"describe"* block,
> create your first function. It should take two numbers and return the sum.
> Test your function with an automated test.


### Objects
There are several ways to handle objects in JavaScript. The most simple way
is the "object literal" form:

    var anObjectInstance = {
          height: 100, 
          width: 100, 
          square: function(){return this.height * this.width;}
    };

Functions also create object instances when invoked with the "new" keyword:

    function SomeClass(height, width){
        this.height = height;
        this.width = width;

        this.square = function(){
          return this.height * this.width;
        }
    }

    var anObjectIstance = new SomeClass(100, 100);

>## Create and test instance methods
> Use these two forms of creating objects to create two instances in 
> your tests. Then test the method in the instances. 

In JavaScript every object has a *"prototype"*. It's a pointer to another
object. When you try to access a property in an object and it's not found,
JavaScript will look for that property in its prototype. That prototype can
have in turn, another prototype. So JavaScript will follow the prototype
chain looking for the required property. This is another way of creating
methods in objects:
 
    function SomeObject(){
    }

    SomObject.prototype.someMethod = function(){
        return 7;
    }

    var someInstance = new SomeObject();
    someInstance.someMethod();      // returns 7;

There are several ways to create objects. This is a common one in ECMAScript 5:

    var someInstance = Object.create(null);
    defineProperty(someInstance, "someMethod", function(){ return 7;});
    someInstance.someMethod();      // returns 7;

    var someOtherInstance = Object.create({someMethod: function(){return 7;}});
    someOtherInstance.someMethod(); // returns 7;

As you can imagine, there are several ways of implementing inheritance but that
is out of the scope of this workshop, at least for now.

## JavaScript: The tricky parts
There are behaviors in the language that are totally unexpected for beginners.
Let's have a look at this characteristics with a practical approach, using 
automated tests to exercise them.

### The "strict" mode
To avoid some of the "tricky" behaviors of JavaScript, ECMAScript 5 implements
the "strict" mode that turns mistakes into errors/exceptions. To enable
the strict mode add the following line at the beginning of your namespaces
declarations (global functions): 

    "use strict";

Unfortunately, the strict mode is not well supported by all browsers, this is
why we still have to be aware of the common mistakes programmers make.

> "Browsers don't reliably implement strict mode yet, so don't blindly depend on 
> it. Strict mode changes semantics. Relying on those changes will cause 
> mistakes and errors in browsers which don't implement strict mode. 
> Exercise caution in using strict mode, and back up reliance on strict mode 
> with feature tests that check whether relevant parts of strict mode are 
> implemented. Finally, make sure to test your code in browsers that do and 
> don't support strict mode. If you test only in browsers that don't 
> support strict mode, you're very likely to have problems in browsers 
> that do, and vice versa." - From Mozilla developer network


### Coercions
In JavaScript, not only booleans evaluate to true or false. Number zero or the
empty string also evaluate as false whereas non-zero numbers and non-empty 
strings evaluate to true. This is why we talk about "truthy" or "falsy" values.
Both, undefined and null evaluate to false.

There are two operators to ask for equality (and their counters, inequaliaty). 
The double equal and the triple equal.
Double equal returns true if both operands are truthy or falsy. On the other
hand, triple equals returns true only if both operands are exactly the same thing.
In other languages, operators like the double equal or the arithmetic operators
fail when applied to operands of different types. For example if I try to compare
a string with a number. However in JavaScript, it compares the values, coercing
them in ways that might look strange. Examples:

    1 == "1"; // true
    1 === "1"; // false
    true == 1; // true
    true == 2; // false
    null == undefined; // true
    NaN == NaN; // false

This [post](http://webreflection.blogspot.com.es/2010/10/javascript-coercion-demystified.html) explains how coercions work.

>## Test the coercions
>
> Write a unit test for all the comparisons you can think of.
> See the tests pass or fail with Karma and also in the browser with Jasmine runner.


### Global variables
When a variable is used without the "var" keyword, it lives in the "global" 
environment. In the browser, the global environment is the "window" object:

    x = 5; // global: equivalent to window.x = 5 in the browser

In node, the global environment is called just global:

    x = 5; // global: equivalent to global.x in Node

> Always declare variables with the "var" keyword, do not use globals.

The problem with globals is that they can easily collide among them,
causing wrong behaviors, that are hard to find and correct. Not only with
our own code but also with the third party libraries we might be using.

>## Write a test that creates a global variable
>
> Then create another test to see the variable is still there, 
> potentially causing side effects (unit tests should not interfere with
> each other). 

### Undefined
Undefined is a value and it shouldn't be writable. It's not writable 
from  ECMAScript 5 on, but not all browsers implement this constraint.
If for some reason, the "undefined" value is overwritten, it will cause
defects in all the code that relies on undefined.

    undefined = 100; // now the global value undefined is no longer undefined

    if (someValue === undefined) // now it will fail even if someValue is undefined.

Fortunately there is an alternative way to check for undefined values:

    if (someValue === void 0) // this works always.

A popular pattern used in jQuery to avoid overwriting the "undefined" is this:

    var namespace = namespace || {};
    (function(namespace, undefined){

        namespace.SomeClass = function(){
           /* ... */
        }/

    }(namespace));

>## What's the meaning of the code block above?
> 
> Why is it avoiding possible problems with "undefined"?
> Write some tests for it and the discuss with others.


### The "this" and "new" keywords
Let's review again the previous code but now, let's introduce a tiny change.

   function SomeClass(height, width){
        this.height = height;
        this.width = width;

        this.square = function(){
          return this.height * this.width;
        }
    }

    var anObjectIstance = SomeClass(100, 100);

>## What's going on?
> Can you notice what the change is? Copy this code and paste it into the 
> unit_tests.js file
> in order to add tests for it. Can you explain what is going on?

The "this" keyword in JavaScript does not work exactly as it does in other
languages like Java. Here, it is dependent on the context.
On the other hand, the "new" keyword is the one which convert plain functions
into constructors. There are several patterns to avoid problems when the 
consumer forgets the "new" keyword. 

There are ways to write JavaScript without the need for the "this" and the "new"
keywords. In the book "JavaScript: the Good Parts", Douglas Crockford explains
a pattern called functional inheritance that can be used to define classes:

    function someClass(){
        var self = {};

        self.someMethod = function(){
            return 777;
        };

        return self;
    }

    var someObjectInstance = someClass();

>## Find more patterns
> There is another patter to make the code work even when the
> "new" keyword is forgotten. Search the Internet for a little while
> and write a test for it. Hint: try to the keys "enforcing new" to your search.

### Frames
Each frame's got its own global environment and there are problems with the
"instanceof" operator when and iframe sends data to a function in the parent 
window. See the details in this [presentation](https://speakerdeck.com/rauschma/categorizing-values-typeof-instanceof-and-beyond) by Axel Rauchsmayer.

One way to avoid problems in the communication between frames, is by passing high 
level messages between them, using 
the [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window.postMessage) API.

### Closures and Scope
Every function creates an environment. Variables declared inside that environment
are local to it, not visible from the outside. The scope of a local variable inside
a function, is the function itself and all the nested functions it might contain. 

    var someGlobal = 100;

    function outerScope(){
        var x = 1;

        function innerScope(){
            var y = 2;

            return x + y;
        };

        return innerScope();
    }

    outerScope(); // What is this returning?

The variable "someGlobal" is visible everywhere. The variable "x" is visible
inside the "outerScope" and "innerScope" functions. The variable "y" is only
visible within the "innerScope" function. Variable "x" is a free variable
inside the "innerScope" function because it hasn't been defined inside or passed in
as an argument. "outerScope" is a pure function whereas "innerScope" is a closure.

> Functions containing free variables are called *"closures"*


