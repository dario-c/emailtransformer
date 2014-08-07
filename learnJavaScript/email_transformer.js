function transform(text) {
  if(text.length>12){
    text = text.replace("(AT)","@");
    text = text.replace('(DOT)',".");
    text = text.replace('-AT-','@');
    text = text.replace('-DOT-',".");
  }
  return text;
}