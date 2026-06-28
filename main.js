import LinkedList from "./linked-list.js";

//test ALL list properties from LinkedList class
const list = new LinkedList();

//run with Node to see results 
list.append(10);
list.append(20);
list.prepend(5);
list.prepend(4);
// console.log(list.size());
// console.log(list.headNode());
// console.log(list.tailNode());

console.log(list.at(2));
// list.pop();
// list.contains();
// list.findIndex();
// list.toString();


// list.insertAt();
// list.removeAt();

// console.log(list.toString());