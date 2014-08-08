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

    it("Doesn't transform single symbols", function() {
      expect(transform("(AT)")).toBe("(AT)");
    });

    it ("Transforms -AT- and -DOT- to @ and .", function() {
      expect(transform("   hhs   lalala-AT-gmail-DOT-com")).toBe("   hhs   lalala@gmail.com");
    });

    it ("Doesn't transform if the letters don't make an email", function() {
      expect(transform("   hhs   lalala-AT--DOT-com")).toBe("   hhs   lalala-AT--DOT-com");
    }); 

    it("Doesn't transforms (AT) and (DOT) to when . is before @", function() {
      expect(transform("lalala(DOT)gmail(AT)com")).toBe("lalala(DOT)gmail(AT)com");
    });

    it("Doesn't transform the text if there is only one DOT", function() {
      expect(transform("lalala(DOT)gmail")).toBe("lalala(DOT)gmail");
    });

    it("Transforms (AT) and (DOT) to @ and .", function() {
      expect(transform("la(DOT)lala(AT)gmail(DOT)com")).toBe("la.lala@gmail.com");
    });

    xit("Transforms (AT) and (DOT) to @ and .", function() {
      expect(transform("la(DOT)lala(AT)gmail(DOT)(DOT)com")).toBe("la(DOT)lala(AT)gmail(DOT)(DOT)com");
    });
    
    it("Cleans the input text", function() {
      the_user_introduces_the_text("lalala(AT)gmail(DOT)com");
      the_user_asks_the_app_to_clean_up();
      the_output_box_should_display("lalala@gmail.com");
    });


  });
});
function the_user_introduces_the_text(text) {
  var inputBox = $("#input-text");
  inputBox.html(text);
}
function the_user_asks_the_app_to_clean_up(){
  var button = $("#clean-button");
  button.click();
}
function the_output_box_should_display(text){
  var resultBox = $("#cleaned-text");
  var output_text = resultBox.val();
  expect(output_text).toBe(text);
}
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