// it is a faulty calculator
// it takes 2 numbers from the user
// it performs the operations as follows
// + == -
// * == +
// - == /
// /== **
// it performs wrong operations only 10% of the times

let num1 = parseInt(prompt("Enter a number"));
let num2 = parseInt(prompt("Enter another number"));
let operator =prompt("Enter operator") 


function faultyCal(a,b,c){
    let d = Math.floor(Math.random() *100)
if(d<10){
    switch(c){
case '+':
    return a-b;
case '-':
    return a/b;
case '*':
    return a+b;
case '/':
   return a**b
    }
}
else{

     switch(c){
case '+':
    return a+b;
case '-':
    return a-b;
case '*':
    return a*b;
case '/':
   return a/b
    }
}

}

console.log(faultyCal(num1,num2,operator))

