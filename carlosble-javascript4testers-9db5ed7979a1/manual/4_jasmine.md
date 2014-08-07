## Introduction to Jasmine
Jasmine is a third party tool, it's not part of the JavaScript language.
However, this is a practical workshop and one of the best ways to study JavaScript is by talking the language. We are going to use automated tests as a mean to 
execute JavaScript 
code and observe its behavior. The framework is going to be 
[Jasmine](http://pivotal.github.io/jasmine/), an open
source framework developed by Pivotal Labs the company behind Pivotal Tracker. 
A test project using Jasmine consist of the following files:

* The test runner/loader: it's an .html file
* The Jasmine files: jasmine.js and jasmine-html.js
* CSS files: jasmine.css
* The tests files: *spec.js

In order to run the tests we have to open the .html file in the browser 
(in case we don't use karma). This html is a local web page linking all 
the JavaScript files and containing the code that initializes and launches
the Jasmine test runner. It must contain also links to the production files
and any third party libraries used.

Our project folder contains a folder called "learnJavaScript" with 
several *.html files in it. Open run_unit_tests.html  with your favourite text 
editor to see how it looks like. To run the tests, open the file with the browser.

Tests are already being executed by Karma, but in case you don't want to use
Karma, this would be the another way to run the tests.

### The specs structure
As you can see in unit_tests.js, a test case is created with a *"describe"* block 
containing tests inside, which are the *"it"* blocks. The first parameter passed
in to *"describe"* and *"it"* is a string that explain what is being tested. 
When a test fails, Jasmine shows both strings concatenated forming a sentence,
thus it's important to make sure that both strings together build up a meaningful
sentence. "Describe" blocks can be nested.

When there is duplication in the tests setup, we can extract it out using the
*"beforeEach"* function that Jasmine executes right before every test.

### Assertions
Jasmine comes with an *"expect"* function and several built-in matchers to make 
assertions:

    expect(actualVale).toBeGreaterThan(100);

Notice that a test without assertions is always a passing test (green), unless
there are a syntax errors or exceptions thrown in the executing code. The
assertions are a fundamental part of a test. This is why in Test Driven Development,
we run every new test before making it pass, to confirm it fails. Sometimes 
one makes mistakes in the test, and it's green when we expected it to be red.

> The are several built-in matchers, find them listed in the framework's site.
> Two useful matchers to assert on equality are:
> 
> * toBe: this is like using "===", only identical operands are equal.
> * toEqual: this is similar to "==" but more powerful. It can compare objects, 
considering them equal if their properties have the same values.  

### Example
    describe("the calculator", function(){
        var calculator;
        beforeEach(function(){
            calculator = factory.calculator();
        });

        it("adds two numbers", function(){
            var result = calculator.add(2,2);
            
            expect(result).toEqual(4);
        });

        it("multiplies two numbers", function(){
            var result = calculator.multiply(3,2);

            expect(result).toEqual(6);
        });
    });

### Skipping tests
Sometimes you just want to run certain tests or maybe all the tests but one.
In Jasmine you can add an *"x"* before the *"describe"* or the *"it"* to 
tell the framework you want to skip those tests.

    xdescribe("...") // this skips all the tests within the test case.
    xit("...")       // this skips this particular test.

If you are using Karma to run the tests, there is also a way to ask Karma
to skip all the test but one. It works for test cases and single tests:

    ddescribe("...") // this executes only the tests within this test case.
    iit("...")       // this executes only this particular test, no more.


