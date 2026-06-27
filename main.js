import LinkedList from "./linked-list.js";

const list = new LinkedList();

//test ALL list properties from LinkedList class
list.append();
list.prepend();
list.size();
list.head();
list.tail();
list.at();
list.pop();
list.contains();
list.findIndex();
list.toString();


list.insertAt();
list.removeAt();

//run with Node to see results 
console.log(list.toString());