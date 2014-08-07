

describe("Email Transformator", function(){

  describe("Returns text filtered", function(){

    it("Returns empty string if given an empty string", function() {
      expect(transform("")).toBe("");
    });

    it("Returns the same word if given a word", function() {
      expect(transform("Peter")).toBe("Peter");
    });

    it("Transforms (AT) to @", function() {
      expect(transform("lalala(AT)gmail.com")).toBe("lalala@gmail.com");
    });

    it("Transforms (AT) and (DOT) to @ and .", function() {
      expect(transform("lalala(AT)gmail(DOT)com")).toBe("lalala@gmail.com");
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


- "Hi my email is lalala(AT)gmail.com"
      => " - Hi my email is lalala@gmail.com"

- "Hi my email is lalala(AT)gmail(DOT)com"
      => " - Hi my email is lalala@gmail.com"


- "Hi my email is lalala@gmail-DOT-com"
      => " - Hi my email is lalala@gmail.com"


- "Hi my email is lalala-AT-gmail.com"
      => " - Hi my email is lalala@gmail.com"o
*/