describe("The Game GUI", function(){
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('fixtures.html');
    game();        // koan: why do I have to invoke this function?
  });

  it("contains the start button", function(){
      // fine-grained integration test
      expect($('#start-button')).toExist();
  });

  it("is hidding the game button", function(){
      // fine-grained integration test
      expect($('#the-button')).not.toBeVisible();
  });

  it("contains the right style", function(){
      // fine-grained integration test
      expect($('#the-button')).toHaveClass('btn');
  });

  it("turns the button visible when game starts", function(){
      // coarse-grained integration test
      $('#player-name').val('testing');
      $('#start-button').click();

      expect($('#the-button')).toBeVisible();
  });

  it("shows alert if trying to start without name", function(){
      // everything is testable, even bad code!!!

      var original = window.alert;
      var wasAlertDisplayed = false;
      try{
          window.alert = function(){
            wasAlertDisplayed = true;
          };
          $('#player-name').val('');
          $('#start-button').click();
      }
      finally{
        window.alert = original;
      }

      expect(wasAlertDisplayed).toBeTruthy();
  });
});

