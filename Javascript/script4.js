// let heroes = ["ironman", "thor", "hulk", "saktiman", "spaiderman", "antman"];
// for(let i=0; i<6; i++){
//     document.write(heroes[i]);
    
// }

// //by using for of 
// for(let hero of heroes){
//     console.log(hero);

// }

// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }

// practice question
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// // let avg = `${(85 + 97 + 44 + 37 + 76 + 60)/6}`;
// for(let val of marks){
//     sum += val;
// }
// console.log(sum);
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }


// for loop
// for(let i=0; i<items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;
    
// }
// console.log(items);


//push method
// let foodItems = ["potato", "apple", "litchi","tomato"];
// console.log(foodItems);
// foodItems.push("chips", "burger", "paneer");
// document.write(foodItems);


// pop method
// let foodItems = ["potato", "apple", "litchi","tomato"];
// document.write(foodItems);
// let deletedItem = foodItems.pop();
// foodItems.pop();
// document.write(foodItems);
// document.write("deleted", deletedItem);

//toString method
// let foodItems = ["potato", "apple", "litchi","tomato"];
// document.write(foodItems);
// document.write(foodItems.toString());
// document.write(foodItems);

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes = ["saktiman", "krish"];

//  let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);    //.concat(indianHeroes);
//  console.log(heroes);

// let marvelHeroes = ["thor", "spiderman", "ironman"];
//  let val = marvelHeroes.shift();
//  document.write(marvelHeroes);
//  document.write("deleted", val);


// slice method
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));


// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
// arr.splice(2,0, 101, 102); // add element
// arr.splice(3, 1);


// arr.splice(3, 1, 104);
// document.write(arr);

// Create an array to store companies -> Bloomberg, Microsoft, Uber, Google, IBM, Netflix.

// let arr = ["Bloomberg", "Microsoft", "Uber",  "Google", "IBM", "Netflix"];
// arr.splice(0,1);
// arr.splice(2, 1,"Ola");
// arr.push("Amazon");
// console.log(arr);

