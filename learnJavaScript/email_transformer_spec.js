

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

    it("if you only pass (AT) it Returns (AT) as a string", function() {
      expect(transform("(AT)")).toBe("(AT)");
    });

    it ("Transforms -AT- and -DOT- to @ and .", function() {
      expect(transform("   hhs   lalala-AT-gmail-DOT-com")).toBe("   hhs   lalala@gmail.com");
    });

    it ("if combination of -AT- and -DOT- is not an email, not tranform the text", function() {
      expect(transform("   hhs   lalala-AT--DOT-com")).toBe("   hhs   lalala-AT--DOT-com");
    }); 

    it("Doesn't transforms (AT) and (DOT) to when . is before @", function() {
      expect(transform("lalala(DOT)gmail(AT)com")).toBe("lalala(DOT)gmail(AT)com");
    });

    it("It doesn't transform the text if they is only one DOT", function() {
      expect(transform("lalala(DOT)gmail")).toBe("lalala(DOT)gmail");
    });

    it("Transforms (AT) and (DOT) to @ and .", function() {
      expect(transform("la(DOT)lala(AT)gmail(DOT)com")).toBe("la.lala@gmail.com");
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