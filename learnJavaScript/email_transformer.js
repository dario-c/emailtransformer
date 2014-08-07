function transform(text) {
  var initialText = text;
  if(text.length>12){
    for (var key in Rules()){
      text = text.replace(key,Rules()[key]);
    }
    if(!isValidEmail(text)){
      return initialText;
    }
  }
  return text;
}

function Rules(){
  self = {
    "(AT)": "@",
    "-AT-": "@",
    "(DOT)": ".",
    "-DOT-": "."
  };
  return self;
}

var isValidEmail = function(text) {
  for(var i=0; i<text.length-2;i++) {
    if( text[i]+text[i+1]== "@." ){
      return false;
    }
  }
  return true;
} 