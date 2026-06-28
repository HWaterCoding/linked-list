import LinkedList from "./linked-list.js";

//test ALL list properties from LinkedList class
const list = new LinkedList();

//run with Node to see results 

//create a base list to use for all tests and to test append/prepend methods
list.append(10);
list.append(20);
list.prepend(5);
list.prepend(4);

// console.log(list.size());
// console.log(list.headNode());
// console.log(list.tailNode());

// console.log(list.at(3));
// console.log(list.pop());
// console.log(list.pop());

// console.log(list.contains(3));
// console.log(list.contains(4));

// console.log(list.findIndex(1));
// console.log(list.findIndex(10));


list.insertAt(1, 10, 11); //4, 10, 11, 5, 10, 20
list.insertAt(8, 10, 11); //throw error

// list.removeAt();
// list.removeAt();


//toString() method for visual representation of current list state
console.log(list.toString());