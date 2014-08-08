function transform(text) {
  var initialText = text;
  if(itHasMinimumLength(text)){
    for (var key in Rules()){
      while(text.indexOf(key)!= -1){
        text = text.replace(key, Rules()[key]);
      }
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
    "AT": "@",
    "(DOT)": ".",
    "-DOT-": ".",
    "DOT": "."
  };
  return self;
}

var itHasDomain = function(text) {
  for(var i=0; i<text.length-2;i++) {
    if( text[i]+text[i+1]== "@." ){
      return false;
    }
  }
  return true;
};

var itHasDotAfterAt = function(text){
  var subText = text.substring(text.indexOf('@'),text.length)
  if (subText.indexOf('@') < subText.indexOf('.')){
    return true;
  }
  return false;
};

var itHasAtAndDot = function(text){
  if(text.indexOf("@") == -1 || text.indexOf(".") == -1) {
    return false;
  }
  return true;
};

var itHasMinimumLength = function(text) {
  return text.length > "a(AT)a(DOT)a".length
};

var itHasOnlyOneDotAfterAt = function(text) {
  
}

var isValidEmail= function(text){
  if(!itHasDomain(text) || !itHasDotAfterAt(text) || !itHasAtAndDot(text)){
      return false;
  }
  return true;
};


function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}