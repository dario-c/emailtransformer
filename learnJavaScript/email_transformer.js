function transform(text) {
  text = text.replace("(AT)","@");
  text = text.replace('(DOT)',".");
  return text;
}