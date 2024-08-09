let item01;
let item02;
let item03;


function groceryTracker () {
 item01 = parseFloat(document.getElementById('grocery1').value);
 item02 = parseFloat(document.getElementById('grocery2').value);
 item03 = parseFloat(document.getElementById('grocery3').value);
 
 console.log(document.getElementById('grocery1').value);
 console.log(document.getElementById('grocery2').value);
 console.log(document.getElementById('grocery3').value);

 let totAmount = item01 + item02 + item03;
 console.log(item01, item02, item03, totAmount);
 document.getElementById('result').innerText = `The total amount is:$ ${totAmount}`;
}


