document.addEventListener('DOMContentLoaded', init);

var array = [];
var val;
var sum;
var message;
var yourResult;
var endResult;
var used;

function init(event){
  message  = document.getElementById('message');
  yourResult = document.getElementById('answer');
  document.getElementById('submit')
    .addEventListener('click', checkIt);
  document.getElementById('buttons')
    .addEventListener('click', buttonClicked);
  random();
}

function buttonClicked(event){
  if(event.target.matches('span')){
    array.push(event.target.textContent);
  }
}

function checkIt(){
  sum = array.reduce(function(x, y){
    return x + y;
  });
  if (parseInt(sum) === val){
    message.textContent = 'You got it!';
  } else {
    message.textContent = 'So Wrong, the answer is ' + val;
  }
  yourResult.textContent = sum;
}

function random(){
  var num1 = document.getElementById('num1').innerHTML = (Math.floor(Math.random() * 9));
  var num2 = document.getElementById('num2').innerHTML = (Math.floor(Math.random() * 9));
  val = num1 + num2;
}



