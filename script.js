function Typing() {
  var win = window.open("", "newWindow", "width=400,height=300");
  var text = "Hello Professioanl Web Development Track";
  var index = 0;
  function TypeText() {
    if (index < text.length) {
      var char = text[index];
      win.document.body.append(char);
      index++;
      console.log(index, char);
    } else {
      clearInterval(interval);
      win.close();
    }
  }

  var interval = setInterval(TypeText, 200);
}
