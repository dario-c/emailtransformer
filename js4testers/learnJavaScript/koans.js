context = describe;

describe("the JavaScript language", function(){

  describe("when coercing values", function(){
    it("considers numbers to be equal to their string representation", function(){
        expect(1 == "1").toBeTruthy(); 
        expect(1 != "1").toBeFalsy();
    });

    it("knows that numbers and strings are not exactly the same", function(){
        expect(1 === "1").toBeFalsy(); 
        expect(1 !== "1").toBeTruthy();
    });
 
    it("joins parts as string when using the plus operator", function(){
        expect(1 + "a").toEqual("1a");
    });

    it("operates integers before joining the string", function(){
        expect(1 + 1 + "2").toEqual('22');
    });

    it("knows the type of the variable", function(){
        var x = 1;
        expect(typeof(x)).toEqual('number');
    });

    it("surprises me, NaN is not comparable with NaN", function(){
        expect(5 / "a").not.toEqual(5 / "a");
        expect(typeof(NaN)).toEqual('number');
        expect(isNaN(5 / "a")).toBeTruthy();
    });

    it("considers an empty string to be falsy", function(){
        //expect("" == false).toBe......();// Truthy or Falsy
        //expect("" === false).toBe.....();// Truthy or Falsy
    });

    it("considers zero to be falsy", function(){
        //expect(0 == false).toBe......();// Truthy or Falsy
        //expect(0 === false).toBe.....();// Truthy or Falsy
    });

    it("considers nulls to be falsy", function(){
        //expect(null == false).toBe......();// Truthy or Falsy
        //expect(null === false).toBe.....();// Truthy or Falsy
    });

    it("knows the type of a function", function(){
        function x(){}

        expect(typeof(x)).toBe('function');
        //expect(typeof(xxx)).toBe('...');// Truthy or Falsy
    });

    it("concatenate arrays - well, kind of", function(){
        var a = [1,2,3];
        var b = [4,5,6];

        //expect(a + b).toEqual('...');
    });

    it("joins arrays and strings", function(){
        var a = [1,2,3];

        //expect ("1" + a).toEqual(...);
        //expect(a + "1").toEqual(...);
    });

    it("joins arrays and other things", function(){
        var a = [1,2,3];
        var b = ['x', 'y', 'z'];

        //expect(1 + a).toEqual(...);
        //expect(a + 1).toEqual(...);
        //expect(1 + b).toEqual(...);
        //expect(true + a).toEqual(...);
    });

    it("can't compare arrays", function(){
        var a = [1,2,3];
        var b = [1,2,3];

        //expect(a == b).toBe.....();  // Truthy or Falsy
        //expect(a === b).toBe.....(); // Truthy or Falsy
    });

    it("is not the same to compare by value than by reference ", function(){
        var a = [1,2,3];
        var b = [1,2,3];

        expect(a).toEqual(b);        // Jasmine toEqual compares by value
        expect(a).not.toBe(b);       // Jasmine toBe compares by reference
    });

    // TODO: take some more curious examples from Gary Bernhart's WAT presentation
  });

  describe("when using functions", function(){
  
    it("can declare named functions", function(){
        function example(){
            return 'some example';
        }

        //expect(example()).toEqual('...');
    });

    it("can declare anonymous functions", function(){
        var someVar = function(a, b){
            return a + b;
        };

        //expect(typeof(someVar)).toBe('...');
        //expect(someVar(1,1)).toBe('...');
    });

    it("doesn't care about the declaration order when they are named", function(){
        function exampleA(){
            return exampleB(1);
        }
        
        //expect(exampleA()).toEqual('...');
        
        function exampleB(arg1){
            return arg1;
        }
    });

    it("matters, the declaration order when they are anonymous", function(){
        var exampleA = function(){
            return exampleB(1);
        };
        
        //expect(exampleA()).toEqual(1);
        
        var exampleB = function(arg1){
            return arg1;
        };
    });

    it("can use optional parameters", function(){
        function example(a, b, c){
            if (c)
              return a + b + c;
            return a + b;
        }
        ///expect(example(1,1,1)).toBe('...');
        ///expect(example(1,1)).toBe('...');
    });

    it("anonymous functions are anonymous", function(){
         var x = function z(){
            return 1;
         };
         //expect(typeof(z)).toEqual('...');
         //expect(x()).toEqual(...);
    });

    it("can create closures with free variables", function(){
        function external(){
          var a = 1;

          function internal(){
            return a + 1;
          }
          return internal();
        }

        //expect(external()).toBe('...');
    });

    it("can create closures with several free variables", function(){
        function external(){
          var a = 1, b = 2;

          function internal(){
            var c = 3;
            return a + b + c;
          }
        }

        //expect(external()).toBe(6);
    });

    it("defines a pure function when there are no free variables", function(){
        function external(){
          var a = 1, b = 2;

          function internal(a, b){
            var c = 1;
            return a + b + c;
          }
          return internal(4,4);
        }

        //expect(external()).toBe('...');
    });

    it("can use immediately-invoked functions to take advantage of scopes", function(){
        var myNamespace = {};

        (function(theNamespace){
            var counter = 0;

            theNamespace.addOne = function(){
              counter++;
            };

            theNamespace.giveMeTheCount = function(){
              return counter;
            };

        }(myNamespace));

        myNamespace.addOne();
        myNamespace.addOne();

        //expect(myNamespace.giveMeTheCount()).toBe('...');
    });

    it("can return other functions as a function result", function(){
        function plus(amount){
            return function(number){
                return number + amount;
            };
        }

        var f = plus(5);
        
        //expect(f(3)).toBe('...');
    });

    it("can have functions that receive other functions as arguments", function(){
        function plus(originalFunction){
          return function(arg1){ 
               return originalFunction() + arg1;
          };
        }

        var f = plus(function(){return 1;});

        //expect(f(2)).toBe('...');
    });

    it("can invoke functions indirectly using the special 'call'", function(){
        function f(a, b){
            return a + b;
        }

        //expect(f.call(f,1,1)).toEqual('...');
    });

    it("can invoke functions indirectly using the special 'apply'", function(){
        function f(a, b){
            return a + b;
        }

        //expect(f.apply(f, [1,1])).toEqual('...');
    });

    it("doesnt have a private scope inside blocks", function(){
        var j = 0;
        for (var i = 0; i < 5; i++) {
          j += i;
        }

        //expect(i).toEqual('...');
        //expect(j).toEqual('...');
    });

    it("hoists variables the way you probably dont expect", function(){
        function generate(){
          var functions = [];
          for (var i = 0; i < 5; i++){
            functions.push(function(){
              return i;
            });
          }
          return functions;
        }

        //expect(generate()[0]()).toEqual('...');
        //expect(generate()[1]()).toEqual('...');
    });

  });


  describe("when using objects", function(){

    it("can define object literals", function(){
        var obj = {name: 'bob', theName: function(){return this.name;}};

        //expect(obj.theName()).toBe('...');
    });

    it("can define constructors", function(){
        function Obj(){
          var name = 'bob';

          this.theName = function(){
            return name;
          };
        }

        var obj = new Obj();
        //expect(obj.theName()).toBe('...');
    });

    it("may contain 'static' methods", function(){
        function Obj(){
          var name = 'bob';

          this.theName = function(){
            return name;
          };
        }
        Obj.someStaticMethod = function(){
          return 22;
        };

        //expect(Obj.someStaticMethod()).toBe('...');
    });

    it("can have have methods in the prototype", function(){
        function Obj(){
          var name = 'bob';
        }
        Obj.prototype.theName = function(){
            return this.name;
        };

        var obj = new Obj();
        //expect(obj.theName()).toEqual('...');
        //expect(obj.theName).toBe(new Obj().theName);
    });

    it("can define a factory", function(){
        function obj(){
          var self = {};

          var name = 'bob';
          self.theName = function(){
              return name;
          };

          return self;
        }

        var instance = obj();
        //expect(instance.theName()).toBe('...');
        //expect(instance.theName).not.toBe(obj().theName);
    });

    it("can create methods dynamically on an object instance", function(){
        var obj = {};
        var methodNames = ['meow', 'jump'];
        for (var i = 0; i < methodNames.length; i++){
          obj[[methodNames[i]]] = function(){ return 'it works';};
        }
        //expect(obj.meow()).toEqual('...');
    });

    describe("the polymorphism", function(){
        it("may use constructor plus prototype", function(){
            function Parent(){
              this.name = 'parent';
            }
            Parent.prototype.someMethod = function(){
              return 10;
            };

            function Child(){
              Parent.call(this); // constructor stealing
              this.name = 'child';
            }
            Child.prototype = new Parent(); // prototype chaining

            var child = new Child();
            //expect(child.someMethod()).toEqual('...');
            //expect(child.name).toEqual('...');
        });

        it("may use the functional inheritance", function(){
            function parent(){
                var name = 'parent';
                var self = {};
                self.someMethod = function(){
                    return 10;
                };
                return self;
            }

            function child(){
                var name = 'child';
                var self = parent();
                return self;
            }

            var instance = child();
            //expect(instance.someMethod()).toBe('...');
        });

        // KOAN: how do you create "protected methods?"
    });

  });

  context("has ways to simulate classes", function(){
      // "Class"
      function Cat(){
        this.kilos = 1;
        this.feed = function(){
          this.kilos++;
        };
        this.isPurring = function(){
          return true;
        };
      }
      ////////////////////////////////////// 
      // "Class"
      function Lion(energy){
        Cat.call(this); 
        this.energy = energy || 100;
        var self = this;

        var run = function(){ // private method
          self.energy -= 10;
        };
        var attack = function(){ // private method
            self.energy -= 5;
        };
        this.playWithFriend = function(friend){
            if (friend.isPurring())
               self.energy += 10; 
        };
        this.hunt = function(){ // public method
            run();
            attack();
            this.onHunting(); // fire event
        };
        this.onHunting = function(){ /* event */ };
      }


      context("and the THIS keyword", function(){
        var cat;
        
        beforeEach(function(){
            cat = new Cat();
            window.kilos = 0;
        });

        it("sometimes works as expected in other languages", function(){
            cat.feed();
            cat.feed();

            //expect(cat.kilos).toEqual('...');
        });

        it("works different on dettached functions", function(){
            window.kilos = 10;
            var feed = cat.feed;

            feed();

            //expect(window.kilos).toEqual('...');
            //expect(cat.kilos).toEqual('...');
        });

        it("can be bound explicitly with CALL and APPLY", function(){
            var feed = cat.feed;

            feed.apply(cat);

            //expect(cat.kilos).toEqual('...');
        });

        it("can be bound in modern browsers with BIND", function(){
            var feed = cat.feed;
            var bound = feed.bind(cat);

            bound();

            //expect(cat.kilos).toEqual('...');
        });

        it("works different when function is attached to other object", function(){
            var otherCat = new Cat();
            otherCat.kilos = 10;
            otherCat.feed = cat.feed;

            otherCat.feed();
            //expect(otherCat.kilos).toEqual('...');
            //expect(cat.kilos).toEqual('...');
        });

        it("can be handled using the SELF trick", function(){
            var energy = 200;
            var lion = new Lion(energy);

            lion.hunt();

            //expect(lion.energy).toEqual('...');
        });

        it("interprest the THIS when the function is executed", function(){
            var energy = 200;
            var lion = new Lion();

            lion.hunt = function(){
                this.energy = 4000;
            };
            lion.hunt();

            //expect(lion.energy).toEqual('...');
        });
      });

      describe("event driven development", function(){
        // "Class"
        function EventBus(){
            var subscribersInfo = [];

            this.addSubscriber = function(callback){
               var eventNames = [].slice.call(arguments).slice(1);
               subscribersInfo.push({
                 subscriber: callback, eventNames: eventNames});
             };

            this.emit = function(eventName, eventArgs){
               for(var i = 0, len = subscribersInfo.length; i < len; i++){
                   var info = subscribersInfo[i];
                   for (var j = 0, lenj = info.eventNames.length; j < lenj; j++){
                       if (info.eventNames[j] == eventName)
                           info.subscriber(eventName, eventArgs);
                   }
               }
            };
         }  
         
         // PLEASE READ THIS POST. It contains the theory: 
         // http://www.carlosble.com/2013/02/event-oriented-programming-with-javascript/

        it("uses the DOM level 0 traditional model (one2one)", function(){
            var lion = new Lion();
            var called = false;
            // subscribes to the event:
            lion.onHunting = function(){ called = true;};

            lion.hunt();

            //expect(called).toBe('...');
        });

        it("implements the observer pattern (one2many)", function(){
            function Publisher(){
              this.addObserver = function(observerCallback){
                // TODO: implement this 
              };
              this.informAllObservers = function(){
                // TODO: implement this
              };
            }

            var publisher = new Publisher();
            var observer1WasCalled = false;
            var observer1 = function(){ observer1WasCalled = true;};  
            var observer2WasCalled = false;
            var observer2 = function(){ observer2WasCalled = true;};
            publisher.addObserver(observer1);
            publisher.addObserver(observer2);

            publisher.informAllObservers();

            //expect(observer1WasCalled).toBeTruthy();    
            //expect(observer2WasCalled).toBeTruthy();
        });

        it("implements the pub/sub pattern (many2many)", function(){
            var eventBus = new EventBus();  
            var eventWasFired = false;
            var handler = function(eventName, eventArgs){
                eventWasFired = true;
                expect(eventArgs.someNumber).toBe(10);
            };
            eventBus.addSubscriber(handler, "someEvent");

            eventBus.emit("someEvent", {someNumber: 10});

            //expect(eventWasFired).toBeFalsy();
        }); 
      });
  });
});

