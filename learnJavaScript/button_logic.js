$(document).ready(function(){
  var button = $("#clean-button");
  var inputBox = $("#input-text");

  button.on('click', function(event){
    transformTextAndOutput()
  });

  inputBox.keyup(function() {
    transformTextAndOutput()
  });
});

function transformTextAndOutput(){
  var inputBox = $("#input-text");
  var resultBox = $("#cleaned-text");
  var output_text = transform(inputBox.val());
  resultBox.html(output_text);
}