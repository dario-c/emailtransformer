casper.test.begin('Testing The Game', 3, function suite(test) {

    casper.start('http://localhost:3000/', function() {
        test.assertTitle("Test The Game");
    });

    casper.thenEvaluate(function(){
        $("#player-name").val('CasperTestingPlayer');
        $("#start-button").click();
    });
  
    casper.then(function(){
        test.assertVisible('#the-button');
    });

    casper.thenEvaluate(function (){
        $("#the-button").click();
        //$("#the-button").click(); // try to uncomment this line and comment the next block (setTimeout). Why are tests broken sometimes?

        setTimeout(function(){
             $("#the-button").click();
        }, 50);
    });

    casper.waitFor(function(){
        return this.evaluate(function(){
           return $("#clicks-count").text().indexOf("2") > 0;
        });
    }, function then(){
        test.assertSelectorHasText("#clicks-count", "CasperTestingPlayer: 2");
    });

    casper.run(function(){ 
        test.done();
    });
});


