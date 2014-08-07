describe("the behavior of the code in the examples", function(){

  it("calculates the average of an array", function(){
      expect(average([2,2,2])).toEqual(2);      
  });

  it("calculates the average of an array with decimals", function(){
      expect(average([7,7,9])).toEqual(7.666666666666667);      
  });

  it("adds", function(){
      expect(add(2,2)).toEqual(5);
  });

});

