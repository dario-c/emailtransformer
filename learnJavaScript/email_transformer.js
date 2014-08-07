function transform(text) {
  if(text.length>12){
    for (var key in Rules()){
      text = text.replace(key,Rules()[key]);
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