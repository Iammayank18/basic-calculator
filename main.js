


function add(){
  var x=Number(document.getElementById('first').value);
  var y=Number(document.getElementById('second').value);
  var sum=x+y;
  document.getElementById('result').innerHTML=sum;
  // document.write(sum);
}


function minus(){
  var x=Number(document.getElementById('first').value);
  var y=Number(document.getElementById('second').value);
  var sum=x-y;
  document.getElementById('result').innerHTML=sum;
  // document.write(sum);
}


function mul(){
  var x=Number(document.getElementById('first').value);
  var y=Number(document.getElementById('second').value);
  var sum=x*y;
  document.getElementById('result').innerHTML=sum;
  // document.write(sum);
}


function div(){
  var x=Number(document.getElementById('first').value);
  var y=Number(document.getElementById('second').value);
  var sum=x/y;
  document.getElementById('result').innerHTML=sum;
  // document.write(sum);
}



function mod(){
  var x=Number(document.getElementById('first').value);
  var y=Number(document.getElementById('second').value);
  var sum=x%y;
  document.getElementById('result').innerHTML=sum;
  // document.write(sum);
}

function reset() {
  document.getElementById("reset").reset();
}
