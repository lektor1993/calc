var score=null;
var score2=null;
var tmp;
var tmp2="smth";
var character;

function append(value){
	tmp=score.toString();
	score=tmp.concat(value);
}
function btn_clear(){
	score=0;
	console.log("cleared");
	document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn1(){
if (score==null){score=1;
console.log(score);
}
else{
	append("1");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn2(){
if (score==null){score=2;
console.log(score);
}
else{
	append("2");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn3(){
if (score==null){score=3;
console.log(score);
}
else{
	append("3");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn4(){
if (score==null){score=4;
console.log(score);
}
else{
	append("4");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn5(){
if (score==null){score=5;
console.log(score);
}
else{
	append("5");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn6(){
if (score==null){score=6;
console.log(score);
}
else{
	append("6");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn7(){
if (score==null){score=7;
console.log(score);
}
else{
	append("7");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn8(){
if (score==null){score=8;
console.log(score);
}
else{
	append("8");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn9(){
if (score==null){score=9;
console.log(score);
}
else{
	append("9");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn0(){
if (score==null){score=0;
console.log(score);
}
else{
	append("0");
	console.log(score);
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn_comma(){
if (score==null){score=0;
console.log(score);
}
else{
	console.log(score.indexOf('.') );
	if (score.indexOf('.')==(-1)){
	append(".");
	console.log(score);
}
}
document.getElementById("score_textarea").innerHTML=score.toString();
}
function btn_sign(){
	score=parseFloat(score);
score=-score;
score=score.toString();
	document.getElementById("score_textarea").innerHTML=score.toString();
	console.log(score);
}

function btn_backspace(){
	score=score.slice(0,-1);
		console.log(score);
		document.getElementById("score_textarea").innerHTML=score.toString();
}

document.body.onkeypress=function(e){
console.log(e.charCode);
console.log(e.keyCode);
	if(e.charCode==0){tmp=e.keyCode;}
	else {tmp=e.charCode}
	switch(tmp){
		case 8:btn_backspace();break;
		case 32:btn_clear();break;
		case 44:btn_comma();break;
		case 46:btn_comma();break;
		case 48:btn0(); break;
		case 49:btn1();break;
		case 50:btn2();break;
		case 51:btn3();break;
		case 52:btn4();break;
		case 53:btn5();break;
		case 54:btn6();break;
		case 55:btn7();break;
		case 56:btn8();break;
		case 57:btn9();break;
		default: break;
	}

}


document.getElementById("btn1").addEventListener("click", function(){
btn1();
}); 
document.getElementById("btn2").addEventListener("click", function(){
btn2();
}); 
document.getElementById("btn3").addEventListener("click", function(){
btn3();
}); 
document.getElementById("btn4").addEventListener("click", function(){
btn4();
}); 
document.getElementById("btn5").addEventListener("click", function(){
btn5();
}); 
document.getElementById("btn6").addEventListener("click", function(){
btn6();
}); 
document.getElementById("btn7").addEventListener("click", function(){
btn7();
});
document.getElementById("btn8").addEventListener("click", function(){
btn8();
}); 
document.getElementById("btn9").addEventListener("click", function(){
btn9();
}); 
document.getElementById("btn0").addEventListener("click", function(){
btn0();
});  
document.getElementById("btn_clear").addEventListener("click",function(){
	btn_clear();
});
document.getElementById("btn_sign").addEventListener("click",function(){
	btn_sign();
});
document.getElementById("btn_comma").addEventListener("click",function(){
	btn_comma();
});

document.getElementById("btn_backspace").addEventListener("click",function(){
	btn_backspace();
});




