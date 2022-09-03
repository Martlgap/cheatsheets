const COLORMAP = "viridis";

function colorizeButtons() {
  var buttons = document.getElementsByClassName("btn");
  for (var i = 0; i < buttons.length; i++) {
    var color = evaluate_cmap(i / buttons.length, COLORMAP, false);
    var css = ".btn-" + i + " { background: rgba(" + color[0] + ',' + color[1] + ',' + color[2] + ',' + 0.5 + ");}";
    var css_hover = ".btn-" + i + ":hover{ background: rgba(" + color[0] + ',' + color[1] + ',' + color[2] + ',' + 0.25 + ");}";
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    style.appendChild(document.createTextNode(css_hover));
    buttons[i].appendChild(style);
  }
}

function colorizeCards() {
  var cards = document.getElementsByClassName("btn");
  for (var i = 0; i < cards.length; i++) {
    var color = evaluate_cmap(i / cards.length, COLORMAP, false);
    var css = ".box-" + i + " { border-top: 3px solid rgba(" + color[0] + ',' + color[1] + ',' + color[2] + ',' + 0.7 + ");}";
    var style = document.createElement("style");
    style.appendChild(document.createTextNode(css));
    cards[i].appendChild(style);
  }
}

colorizeButtons();
colorizeCards();
