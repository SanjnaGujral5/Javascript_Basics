// function myfunction(){
//     console.log("Welcome to apna college");
//     console.log("We are learning JS");
//     console.log("Welcome to apna collage");
//     console.log("We are learning JS");
// }

// myfunction();
// myfunction();

//  function myfunction(msg){
//     // parameter-> input
//     console.log(msg);
// }
// myfunction("I am learning Javascript"); //argument

// function sum(a, b){    // a, b are parameters
//     s = a + b;
//     document.write("brfore return");
//     return s;
//    console.log("after return"); //this will not be excuted 
    
// }
// sum(3, 4);
// console.log(s);


// Modern JS
//  const arrowSum = (a,b) => {
//     console.log(a+b);

// }

// const arrowMul = (a, b) => {
//     console.log(a * b);
// }

// const printHello = () => {
//     console.log("Hello");
// }

// function countVowels(string){
//     document.write(string);
//     let count = 0;
//     for( const char of string){
    
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//     {
//        count ++;
//     }
    
//     }
//    document.write(count);
// }
//  countVowels("sanjna");

//  const countVow = (string) => {
//     let count = 0;
//     for( const char of string){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//     {
//        count ++;
//     }
    
//     }
//     console.log(count);

//  }
//  countVow("sanjna");

// for each   (it is also known as higher order functions or methods
// it can take different function as parameter or can return diff function)

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
//    console.log(val);
// });


// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val, idx, arr) => {
//        console.log(val, idx, arr);
// });

// For a given array of numbers, print the square of each value using the forEach loop

// let arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((val) => {
//    console.log(val, val**2)
// });

// let num = [1, 2, 3, 4, 5, 6];    // Other method
// let calcSquare = (num) => {
//    console.log(num*num);
// };
// num.forEach(calcSquare);


// map method
// let num = [67, 52, 39];

// num.map((val) => {
//    console.log(val)

// });

// let num = [67, 52, 39];
// let newArr = num.map((val) => {
//    return val * val;
// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let evenArr = arr.filter((val) => {
//    return val % 2 === 0;
//    return val % 2 !== 0;
//    return val > 3;
//    return val < 3;
// });
// document.write(evenArr);

// let arr = [1, 2, 3, 4,];

//  const output = arr.reduce((res, curr) => {
//     return res + curr
// });
// document.write(output);


// let arr = [5, 6, 2, 1, 3];
// const output = arr.reduce((prev, curr) => {
//    return prev > curr  ? prev : curr;
// });
// document.write(output);

// We are given array of marks of students. Filter out of the marks of students that scored 90+

// let marks = [97, 64, 32, 49, 99, 86];
// let toopers = marks.filter((val) => {
//    return val > 90;
// });
// console.log(toopers);

//   let n = prompt("Enter a number");

//   let arr = [];
//   for(let i=1; i<=n; i++){
//   arr[i-1] = i;
//   }
//   console.log(arr);

//    let sum = arr.reduce((res, curr) => {
//    return res + curr;

//   });
//   console.log(sum);

//   let factorial  = arr.reduce((res, curr) => {
//   return res * curr;

//   });
//   console.log(factorial);


  




