let score = "0", comma = false, tmp;

$(".num").click(function () {
  append($(this).text());
});

$(".operator").click(function () {
  if (!this.getAttribute("value")) { operatorHandler($(this).text()); }
  else {
    switch (this.getAttribute("value")) {
      case "equal": return equals();
      case "back": return backspace();
      case "clear": return clear();
      case "sqrt": return funcSqrt();
      case "pow": return funcPow();
      default: break;
    }

  }
})

function operatorHandler(operatorValueParameter) {
  switch (operatorValueParameter) {
    case '*': return multiplyAndDivide('*');
    case '/': return multiplyAndDivide('/');
    case '+': if (!(score.slice(-1) == "+" || score.slice(-1) == "*" || score.slice(-1) == "/")) {
      append("+");
      comma = false;
    }
      break;
    case '-': if (!(score.slice(-1) == "-")) {
      append("-");
      comma = false;
    }
      break;
    case ',': return commaHandler();
    case '.': return commaHandler();
    default: break;
  }

  function commaHandler() {
    if (comma == false) {
      append(".");
    }
    comma = true;
  }

  function multiplyAndDivide(sign) {
    if (
      !(
        score.slice(-1) == "+" ||
        score.slice(-1) == "*" ||
        score.slice(-1) == "/" ||
        score.slice(-1) == "-"
      )
    ) {
      append(sign);
      comma = false;
    }
  }
}

function print() {
  $('#score_textarea').text(score.toString());
}

function append(value) {
  if (score == "0") {
    score = value;
  } else {
    tmp = score.toString();
    score = tmp.concat(value);
  }
  print();
}

function clear() {
  score = "0";
  print();
}

function funcPow() {
  score = (math.pow(parseFloat(score), 2)).toString();
  print();
}

function funcSqrt() {
  score = math.sqrt(parseFloat(score));
  print();
}

function backspace() {
  if (score.length > 1) {
    score = score.slice(0, -1);
  }
  print();
}
function equals() {
  score = math.eval(score);
  score = score.toString();
  if (score == "Infinity") {
    $('#score_textarea').text("YOU CANT DIVIDE BY 0!");
    score = "0";
  }
  else {
    print();
  }
}

document.body.onkeypress = function (e) {
  switch (true) {
    case (e.key == 'Enter'):
      return equals();
    case (e.key == 'Backspace'):
      return backspace();
    case (e.key == 'Escape'):
      return clear();
    case ((42 <= e.charCode) && (e.charCode <= 47)):
      return operatorHandler(e.key); //handling operator action like +,- and so on
    case ((0 <= e.key) && (e.key <= 9)):
      return append(e.key); //handling button 0-9 interaction
    default:
      break;
  }
};



