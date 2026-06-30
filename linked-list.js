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
            if(currentNode === null) return undefined;
        }
        return currentNode.value;
    }


    pop(){
        let head = this.head;
        if(head === null) return undefined;
        this.head = head.next;
        return head.value;
    }


    contains(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === value) return true;
            currentNode = currentNode.next;
        }
        return false;
    }


    findIndex(value){
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null){
            if(currentNode.value === value) return index;
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    }



    //extras
    insertAt(index, ...values){
        //if no values, return early.
        if(values.length === 0) return;
        
        //use the first value in the parameters to create the first new node and store it
        let firstNewNode = new Node(values[0]);
        let lastNewNode = firstNewNode;

        //use a basic for loop to create and chain the rest of the nodes in order
        for (let i = 1; i < values.length; i++) {
            lastNewNode.next = new Node(values[i]);
            lastNewNode = lastNewNode.next;
        }

        //if the index is 0, then prepend these nodes
        if(index === 0){
            lastNewNode.next = this.head;
            this.head = firstNewNode;
            return;
        }

        //store the currentNode as the head, and the index as 0
        let currentNode = this.head;
        let currentIndex = 0;
        
        //loop through nodes until right before the passed in index.
        while(currentNode !== null && currentIndex < index - 1){
            currentNode = currentNode.next; 
            currentIndex++;
        }
        
        //if index too high, throw error.
        if (currentNode === null) {
            throw new RangeError("Index doesn't exist, G.");
        }

        //assign places in new chain
        const after = currentNode.next;
        currentNode.next = firstNewNode;
        lastNewNode.next = after;
    }


    removeAt(index){
        let currentNode = this.head;
        let currentIndex = 0;

        if(index === 0){
            this.head = currentNode.next;
            return;
        }
        
        while(currentNode !== null && currentIndex < index - 1){
            currentNode = currentNode.next;
            currentIndex++;
        }

        if(currentNode === null){
            throw new RangeError("Index doesn't exist, bro.")
        }

        currentNode.next = currentNode.next.next;
    }
}