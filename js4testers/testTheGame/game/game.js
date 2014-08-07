function game(){
    var clickCountLabel = $('#clicks-count');
    var clicksCount = 0;
    var gameButton = $('#the-button');
    var stopButton = $('#stop-button');
    var startButton = $('#start-button');
    var playerNameBox = $('#player-name');
    var scorePanel = $('#score-panel');
    var playerName = null;

    gameButton.click(onGameButtonClicked);
    stopButton.click(onStopButtonClicked);
    startButton.click(onStartButtonClicked);

    function onGameButtonClicked(){
        clicksCount++;
        $.post('/sendScore/', {
            playerName:playerName,
            score: clicksCount}, 
            function success(){
               $.get('/getScores', function(data){
                  var scores = JSON.parse(data);
                  var scoreText = "";
                  for (var playerName in scores){
                    scoreText += playerName + ": ";
                    scoreText += scores[playerName];
                    scoreText += "<br/>";
                  }
                  clickCountLabel.html(scoreText);
              });
          });
    }

    function onStopButtonClicked(){
        $.get('/stopGame');
        clicksCount = 0;
        gameButton.hide();
        scorePanel.hide();
        clickCountLabel.text(clicksCount);
    };

    function onStartButtonClicked(){
        $.get('/startGame');
        playerName = playerNameBox.val();
        if(!playerName){
           alert('Please introduce your name first');
           return;
        }
        gameButton.show();
        scorePanel.show();
    };
};

