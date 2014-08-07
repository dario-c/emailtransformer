## Test Doubles

Sometimes it's convenient to replace certain parts of the production code 
with mock implementations in order for the tests to be faster, more robust or 
easier to set up.
Although the term "mock" in English may cover all the different kinds of
simulations, we use the term "double" following Gerard Meszaros' 
[terminology](http://xunitpatterns.com/Test%20Double.html).
Double as a metaphor, as in an action movie. The most common test doubles used
in unit tests are Stubs, Spies and Mocks. So the word "mock" is confusing because
in English it means one thing but according to Meszaros it's a particular kind 
of test double. 


## Test Stub
[A test stub](http://xunitpatterns.com/Test%20Stub.html) does not have memory to
remember what calls were made to a function. It just returns programmed answers
to expected calls.


## Test Spy
[A test spy](http://xunitpatterns.com/Test%20Spy.html) does remember everything
that happen to the function, every single call with all its details.


## Mock Object
[A mock object](http://xunitpatterns.com/Mock%20Object.html) requires to be
given the expectations before the action and checks that all of them are
satisfied eventually, also making the test fail if the unexpected happened.


## The Passive View Pattern
With the [Passive View](http://martinfowler.com/eaaDev/PassiveScreen.html) pattern,
there is no business logic in the view and the code is very easy to test. UI elements
(sometimes called widgets or controls) can be replaced with test doubles if 
necessary, although it's very easy also to test against the DOM. 


## The Presentation Model Pattern
As an alternative to passive view, the 
[Presentation Model](http://martinfowler.com/eaaDev/PresentationModel.html) also
makes it easy to test the code. It's specially useful when there are several 
displays associated with the same component. 


## Exercises
In the [project repository](https://bitbucket.org/carlosble/javascript4testers) 
there is a folder called testDoubles containing more koans, this time to practice
with test doubles.



