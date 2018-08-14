let score = "0", comma = false, tmp;

function append(value) {
	if (score == "0") {
		score = value;
	}
	else {
		tmp = score.toString();
		score = tmp.concat(value);
	}
	console.log(score);
	document.getElementById("score_textarea").innerHTML = score;
}
function btn_clear() {
	score = "0";
	console.log("cleared");
	document.getElementById("score_textarea").innerHTML = score;

}
function btn1() { append("1"); }
function btn2() { append("2"); }
function btn3() { append("3"); }
function btn4() { append("4"); }
function btn5() { append("5"); }
function btn6() { append("6"); }
function btn7() { append("7"); }
function btn8() { append("8"); }
function btn9() { append("9"); }
function btn0() { append("0"); }
function btn_add() {
	if (!(score.slice(-1) == "+" || score.slice(-1) == "*" || score.slice(-1) == "/")) {
		append("+"); comma = false;
	}
}
function btn_substract() {
	if (score.slice(-1) == "-") { }
	else { append("-"); comma = false; }
}
function btn_multiply() {
	if (score.slice(-1) == "+" || score.slice(-1) == "*" || score.slice(-1) == "/" || score.slice(-1) == "-") { }
	else { append("*"); comma = false; }
}
function btn_divide() {
	if (score.slice(-1) == "+" || score.slice(-1) == "*" || score.slice(-1) == "/" || score.slice(-1) == "-") { }
	else { append("/"); comma = false; }
}
function btn_comma() {
	console.log(score);
	if (comma == false) { append("."); }
	comma = true;
}

function btn_pow() {
	score = math.pow(parseFloat(score), 2);
	score = score.toString();
	document.getElementById("score_textarea").innerHTML = score;
}

function btn_sqrt() {
	score = math.sqrt(parseFloat(score));
	document.getElementById("score_textarea").innerHTML = score;
}

function btn_backspace() {
	if (score.length > 1) {
		score = score.slice(0, -1);
		console.log(score);
		document.getElementById("score_textarea").innerHTML = score.toString();
	}
}
function btn_equals() {
	score = math.eval(score);
	score = score.toString();
	console.log(score);
	if (score == "Infinity") { document.getElementById("score_textarea").innerHTML = "YOU CANT DIVIDE BY 0!"; score = "0"; }
	else { document.getElementById("score_textarea").innerHTML = score; }
}

document.body.onkeyup = function (e) {
	switch (e.keyCode) {
		case 13: btn_equals(); break;
		case 46: btn_backspace(); break;
		default: break;
	}
}

document.body.onkeypress = function (e) {
	switch (e.charCode) {
		case 8: btn_backspace(); break;
		case 32: btn_clear(); break;
		case 42: btn_multiply(); break;
		case 43: btn_add(); break;
		case 44: btn_comma(); break;
		case 45: btn_substract(); break;
		case 46: btn_comma(); break;
		case 47: btn_divide(); break;
		case 48: btn0(); break;
		case 49: btn1(); break;
		case 50: btn2(); break;
		case 51: btn3(); break;
		case 52: btn4(); break;
		case 53: btn5(); break;
		case 54: btn6(); break;
		case 55: btn7(); break;
		case 56: btn8(); break;
		case 57: btn9(); break;
		case 61: btn_equals(); break;
		default: break;
	}

}


document.getElementById("btn1").addEventListener("click", function () { btn1(); });
document.getElementById("btn2").addEventListener("click", function () { btn2(); });
document.getElementById("btn3").addEventListener("click", function () { btn3(); });
document.getElementById("btn4").addEventListener("click", function () { btn4(); });
document.getElementById("btn5").addEventListener("click", function () { btn5(); });
document.getElementById("btn6").addEventListener("click", function () { btn6(); });
document.getElementById("btn7").addEventListener("click", function () { btn7(); });
document.getElementById("btn8").addEventListener("click", function () { btn8(); });
document.getElementById("btn9").addEventListener("click", function () { btn9(); });
document.getElementById("btn0").addEventListener("click", function () { btn0(); });
document.getElementById("btn_equals").addEventListener("click", function () { btn_equals(); });
document.getElementById("btn_add").addEventListener("click", function () { btn_add(); });
document.getElementById("btn_substract").addEventListener("click", function () { btn_substract(); });
document.getElementById("btn_multiply").addEventListener("click", function () { btn_multiply(); });
document.getElementById("btn_divide").addEventListener("click", function () { btn_divide(); });
document.getElementById("btn_clear").addEventListener("click", function () { btn_clear(); });
document.getElementById("btn_comma").addEventListener("click", function () { btn_comma(); });
document.getElementById("btn_backspace").addEventListener("click", function () { btn_backspace(); });
document.getElementById("btn_pow").addEventListener("click", function () { btn_pow(); });
document.getElementById("btn_sqrt").addEventListener("click", function () { btn_sqrt(); });




