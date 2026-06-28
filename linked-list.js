class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList{
    constructor(){
        this.head = null;
    }

    toString(){
        let result = "";
        let currentNode = this.head;
        while (currentNode !== null) {
            result += "( " + currentNode.value + " ) -> ";
            if(currentNode.next === null){
                result += "null";
            }
            currentNode = currentNode.next;
        }
        return result
    }

    append(value){
        const newNode = new Node(value);
        
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }


    prepend(value){
        const newNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        //target the current head node.
        let headNode = this.head;
        //declare newNode as this.head.
        this.head = newNode;
        //have newNode.next = currentNode
        newNode.next = headNode;
    }


    size(){
        let nodeCount = 0;

        if(this.head === null){
            return `The amount of Nodes in this list are ${nodeCount}`;
        }

        let currentNode = this.head;
        while(currentNode !== null){
            nodeCount++;
            currentNode = currentNode.next;
        }

        return `The amount of Nodes in this list are ${nodeCount}`;
    }

    
    headNode(){
        let head = this.head;
        if(head === null){
            return undefined;
        } else{
            return head.value;
        }
    }
    
    
    tailNode(){
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }


    at(index){
        let currentNode = this.head;
        let nodesCycled = 0;
        while(nodesCycled < index){
            currentNode = currentNode.next;
            nodesCycled++;
        }
        if(currentNode === null) return undefined;
        return currentNode.value;
    }


    pop(){

    }


    contains(value){

    }


    findIndex(value){

    }



    //extras
    insertAt(index){

    }


    removeAt(index){

    }

}