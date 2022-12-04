"use strict";
const ps =require ("prompt-sync");
const prompt = ps();

// a simple e-commerce console application
// a welcome message to the store
console.log("Welcome to Hub's store.")

// allows users to input their names and asking them what they want to purchase in our list of available items.
let user_name = prompt ("Enter your name: ");
console.log (`Hello ${user_name}, what would you like to buy?`);
let items_available = {coke: 1, oranges: 2, perfume: 5};

// here we want to put the keys in the objects in an array.
let available = new Array();
for (var key in items_available){
    available.push(key);
}
console.log(available)

// for every item you select by inputing, it gets stored in the array items.
let items = [];
let cart = prompt("select an item:");
items.push(cart);
console.log(items)

if (items.includes (available)) {
        console.log("it is available, your bill is processing.");

}
  else {
    console.log("it is  not available.");
  }
//console.log(items);
