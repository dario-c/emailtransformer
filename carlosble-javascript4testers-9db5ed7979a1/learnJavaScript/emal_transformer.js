context = describe;

describe("Email Transformator", function(){

  describe("Returns text filtered", function(){
    it("Returns nothing if given nothing", function(){

      expect(transform()).toBe()

    });

  });
});


/*

name@"gmail".com
+
TO Do:
'
  - ""
    =>""

  - "Peter"
    =>"Peter"

  - 9
    =>"9"

  - "DOT"
    =>"."

  - "-DOT-"
    => "."

  - "(DOT)"
   => "."


 - "Hi my name Tarzan, i live in the jungle"   
      => " - Hi my name Tarzan, i live in the jungle"

- "Hi my email is lalala(AT)gmail.com"
      => " - Hi my email is lalala@gmail.com"

- "Hi my email is lalala(AT)gmail(DOT)com"
      => " - Hi my email is lalala@gmail.com"


- "Hi my email is lalala@gmail-DOT-com"
      => " - Hi my email is lalala@gmail.com"


- "Hi my email is lalala-AT-gmail.com"
      => " - Hi my email is lalala@gmail.com"o
*/