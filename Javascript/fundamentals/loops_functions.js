// There are 5 types of loops
// for forin forof while and dowhile



// for(let a =1;a<10;a++){
//     console.log(a)
// }


// for in loop => ideal for objects to get keys and values

// let obj = {
//     name:"Shariq",
//     university:"SSUET"
// }

// for (const key in obj) {
//    console.log(key,obj[key])
    
// }



// for of => ideal to iterate strings and arrays

// string scenario
// let name = "Shariq";
// for (const element of name) {
//     console.log(element)
// }

// array scenario
// let arr = [10,20,30];
// for (const element of arr) {
//     console.log(element)
// }



// while loop

// let i = 3;
// while(i<5){
//     console.log(i);
//     i++
// }


// do-while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i<10);





// functions





// function printName(name){
// console.log("Hey "+name+" is good");
// console.log("Hey "+name+" is nice");
// console.log("Hey "+name+" is handsome");
// }


// printName("Shariq")


// function sum(a,b){
//     return a+b
// }

// console.log(sum(5,4))



// function sum(a,b,c=3){
//     return a+b+c
// }

// console.log(sum(3,4)) // only passing a and b
// console.log(sum(3,4,5)) // passing a and b with c overridden




// arrow functions

// const func = (c)=>{
// console.log("I am returning",c)
// }

// func(34)
// func(33)
// func(78)


// practice questions
// print the marks of students in object using for loop

// let obj = {"Shariq":78,"Suleman":56,"Shayan":44}
// let keys = Object.values(obj)
// for(let i=0;i<keys.length;i++){
//     console.log(keys[i])
// }

//2 using for in
// for (const key in obj) {
//     console.log(obj[key])

// }


//3 write a program to print try again until user enters the correct number


// let a = 0;

// while(a!=5){
//  a = prompt("Enter a number");

// if(a==5){
// console.log("number found")
// }
// else{
//     alert('try again')
// }

// }


// write a function to print mean of 5 numbers

function mean(a,b,c,d,e){
    let mean = (a,b,c,d,e)/5
    return mean
}
console.log(mean(3,4,5,6,7))

